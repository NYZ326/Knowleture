using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using Learnbook_Data.Data;
using Microsoft.EntityFrameworkCore;
using Learnbook_Data.Models;

namespace Learnbook_Web.Controllers
{
    [Produces("application/json")]
    [Route("course")]
    public class CourseController : BaseController
    {
        private readonly LearnbookContext _context;

        #region Constructor
        public CourseController(LearnbookContext context)
        {
            _context = context;
        }
        #endregion

        #region API Methods
        /// <summary>
        /// Gets a course summary for user.
        /// </summary>
        /// <param name="role">Role of the user.</param>
        /// <param name="id">ID of the user.</param>
        /// <returns>Returns a list of courses.</returns>
        [HttpGet("{role}/{id:int}", Name = "GetCoursesByUserId")]
        public async Task<JsonResult> GetCoursesByUserId(string role, int id)
        {
            try
            {
                object[] courses = await GetCourseInfo(_context, role, id);

                if (courses == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("Courses not found with user id: {0}", id));
                }

                return Json(courses);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                return Json(ex.ToString());
            }
        }

        /// <summary>
        /// Gets a course summary for user.
        /// </summary>
        /// <param name="role">Role of the user.</param>
        /// <param name="name">Username of the user.</param>
        /// <returns>Returns a list of courses.</returns>
        [HttpGet("{role}/{name}", Name = "GetCoursesByUserName")]
        public async Task<JsonResult> GetCoursesByUserName(string role, string name)
        {
            try
            {
                object[] courses = await GetCourseInfo(_context, role, name);

                if (courses == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("Courses not found with user name: {0}", name));
                }

                return Json(courses);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                return Json(ex.ToString());
            }
        }
        #endregion
    }
}