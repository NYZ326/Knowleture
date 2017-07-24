using System;
using System.Linq;
using System.Security.Claims;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.Authentication;

using Learnbook_Web.ViewModels;
using Learnbook_Data.Data;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;

namespace Learnbook_Web.Controllers
{
    [AllowAnonymous]
    public class LoginController : Controller
    {
        private readonly LearnbookContext _context;

        #region Constructor
        public LoginController(LearnbookContext context)
        {
            _context = context;
        }
        #endregion

        // GET: Login Index View
        public IActionResult Index()
        {
            return View();
        }

        // POST: After user logs in
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            if (ModelState.IsValid)
            {

                var user = _context.Users
                            .Include(ur => ur.UserRoles)
                            .ThenInclude(r => r.Role)
                            .Where(u => u.Username == model.Username && u.Password == model.Password)
                            .FirstOrDefault();

                if (user != null)
                {
                    // Get last login date/time and save to database
                    user.LastLogin = DateTime.Now;
                    this._context.SaveChanges();

                    var roles = user.UserRoles;
                    var claims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Name, model.Username),
                        new Claim(ClaimTypes.Role, roles.FirstOrDefault().Role.RoleName)
                    };
                    var props = new AuthenticationProperties
                    {
                        IsPersistent = true,
                        ExpiresUtc = DateTime.UtcNow.AddMinutes(30),
                        AllowRefresh = false
                    };

                    var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                    await HttpContext.Authentication.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(identity), props);

                    // Redirect user to page depending on role
                    if (roles.Any(r => r.Role.RoleName.Contains("Instructor") || r.Role.RoleName.Contains("Student")))
                    {
                        return RedirectToAction("Index", "Dashboard");
                    }
                    else
                    {
                        return RedirectToAction("AccessDenied", "Error");
                    }
                }

                ModelState.AddModelError(string.Empty, "Incorrect User ID and/or Password");
            }

            return View(model);
        }

        // User logout
        public async Task<IActionResult> Logout()
        {
            await HttpContext.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Index", "Login");
        }
    }
}