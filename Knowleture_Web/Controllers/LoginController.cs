using System;
using System.Linq;
using System.Text;
using System.Security.Claims;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;

using Knowleture_Data.Models;
using Knowleture_Data.Data;
using Knowleture_Web.Models;
using Knowleture_Web.ViewModels;
using Knowleture_Web.Helper;

namespace Knowleture_Web.Controllers
{
    [AllowAnonymous]
    [Produces("application/json")]
    public class LoginController : Controller
    {
        private readonly KnowletureContext _context;
        private readonly AppSettings _appSettings;

        #region Constructor
        public LoginController(KnowletureContext context, IOptions<AppSettings> appSettings)
        {
            _context = context;
            _appSettings = appSettings.Value;
        }
        #endregion

        public IActionResult Index()
        {
            return View();
        }


        // POST: After user logs in
        [HttpPost("authorize/login")]
        public IActionResult Login([FromBody]LoginModel model)
        {
            var user = Authenticate(model.Username, model.Password);

            if (user == null)
            {
                return Unauthorized();
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim(ClaimTypes.Role, user.UserRoles.FirstOrDefault().Role.RoleName)
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(new
            {
                Id = user.UserId,
                Username = user.Username,
                Role = user.UserRoles.FirstOrDefault().Role.RoleName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Image = user.ImageUrl,
                Token = tokenString
            });
        }


        #region Helper Methods
        public User Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = _context.Users
                            .Include(ur => ur.UserRoles)
                            .ThenInclude(r => r.Role)
                            .FirstOrDefault(x => x.Username == username);

            // Check if username exists
            if (user == null)
                return null;

            // Check if password is correct
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            // Authentication successful
            return user;
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }
        #endregion
    }
}