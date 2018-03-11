using System;
using System.Net;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using AutoMapper;

using Learnbook_Data.Models;
using Learnbook_Data.Repositories;
using Knowleture_Web.Models;

namespace Knowleture_Web.Controllers
{
    [Produces("application/json")]
    [Route("user")]
    public class UserController : BaseController
    {
        #region Properties
        private UserRepository _userRepo { get; set; }
        private readonly IMapper _mapper;
        #endregion

        #region Constructor
        public UserController(UserRepository userRepo, IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
        }
        #endregion

        #region API Methods
        /// <summary>
        /// Gets a single user by id.
        /// </summary>
        /// <param name="id">ID of the user.</param>
        /// <returns>Returns json result of the user.</returns>
        [HttpGet("{id:int}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            try {
                User user = await _userRepo.Get(id);

                if (user == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("User not found with id: {0}", id));
                }

                var userModel = _mapper.Map<User, UserDTO>(user);
                return new ObjectResult(userModel);
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
        /// <returns>Returns json result of the user.</returns>
        [HttpGet("{name}", Name = "GetUserByName")]
        public async Task<IActionResult> GetUserByName(string name)
        {
            try
            {
                User user = await _userRepo.Get(name);

                if (user == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("User not found with name: {0}", name));
                }

                var userModel = _mapper.Map<User, UserDTO>(user);
                return new ObjectResult(userModel);
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
        /// <returns>Returns json result of a list of users.</returns>
        [HttpGet("all", Name = "GetAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                IEnumerable<User> allUsers = await _userRepo.GetAll();

                if (allUsers.Count() == 0)
                {
                    Response.StatusCode = (int)HttpStatusCode.NoContent;
                    return Json("There are no users in the database.");
                }

                var allUsersModel = _mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(allUsers);
                return new ObjectResult(allUsersModel);
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