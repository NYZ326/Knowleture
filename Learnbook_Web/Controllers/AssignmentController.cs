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
    [Route("assignment")]
    public class AssignmentController : BaseController
    {
        private readonly LearnbookContext _context;

        #region Constructor
        public AssignmentController(LearnbookContext context)
        {
            _context = context;
        }
        #endregion

        #region API Methods
        /// <summary>
        /// Gets a list of assignments for a particular course.
        /// </summary>
        /// <param name="id">ID of the course.</param>
        /// <returns>Returns a list of assignments.</returns>
        [HttpGet("{id:int}", Name = "GetAllAssignmentsByCourse")]
        public async Task<JsonResult> GetAllAssignmentsByCourse(int id)
        {
            try
            {
                var courses = await _context.Courses
                                            .Include(a => a.Assignments)
                                            .FirstOrDefaultAsync(c => c.CourseId == id);

                if (courses == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("Assignments could not be found with course id: {0}", id));
                }

                return Json(courses.Assignments);
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