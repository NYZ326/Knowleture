using System;
using System.Net;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Learnbook_Data.Models;
using Learnbook_Data.Data;
using System.Net.Http;

namespace Learnbook_Web.Controllers
{
    [Produces("application/json")]
    [Route("user")]
    public class UserController : BaseController
    {
        private readonly LearnbookContext _context;

        #region Constructor
        public UserController(LearnbookContext context)
        {
            _context = context;
        }
        #endregion

        #region API Methods
        /// <summary>
        /// Gets a single user by id.
        /// </summary>
        /// <param name="id">ID of the user.</param>
        /// <returns>Returns object result of the user.</returns>
        [HttpGet("{id:int}", Name = "GetUserById")]
        public async Task<IActionResult> GetUserById(int id)
        {
            try {
                var user = await _context.Users
                                .Include(r => r.UserRoles)
                                .ThenInclude(r => r.Role)
                                .FirstOrDefaultAsync(u => u.UserId == id);

                if (user == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("User not found with id: {0}", id));
                }

                return new ObjectResult(user);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                return Content(ex.ToString());
            }
        }

        /// <summary>
        /// Gets a single user by username.
        /// </summary>
        /// <param name="name">Username of the user.</param>
        /// <returns>Returns object result of the user.</returns>
        [HttpGet("{name}", Name = "GetUserByName")]
        public async Task<IActionResult> GetUserByName(string name)
        {
            try
            {
                var user = await _context.Users
                                .Include(r => r.UserRoles)
                                .ThenInclude(r => r.Role)
                                .FirstOrDefaultAsync(u => u.Username == name);

                if (user == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("User not found with name: {0}", name));
                }

                return new ObjectResult(user);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                return Content(ex.ToString());
            }
        }

        /// <summary>
        /// Gets a list of all the users in the database.
        /// </summary>
        /// <returns>Returns object result of a list of users.</returns>
        [HttpGet("all", Name = "GetAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                var allUsers = await _context.Users
                                .Include(r => r.UserRoles)
                                .ThenInclude(r => r.Role)
                                .ToListAsync();

                if (allUsers.Count == 0)
                {
                    Response.StatusCode = (int)HttpStatusCode.NoContent;
                    return Json("There are no users in the database.");
                }

                return new ObjectResult(allUsers);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                return Content(ex.ToString());
            }
        }
        #endregion
    }
}