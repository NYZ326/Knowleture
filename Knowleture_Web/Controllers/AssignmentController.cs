using System;
using System.Net;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using AutoMapper;

using Learnbook_Data.Data;
using Learnbook_Data.Repositories;
using Learnbook_Data.Models;
using Knowleture_Web.Models;

namespace Knowleture_Web.Controllers
{
    [Produces("application/json")]
    [Route("assignment")]
    public class AssignmentController : BaseController
    {
        private CourseRepository _courseRepo { get; set; }
        private readonly IMapper _mapper;

        #region Constructor
        public AssignmentController(CourseRepository courseRepo, IMapper mapper)
        {
            _courseRepo = courseRepo;
            _mapper = mapper;
        }
        #endregion

        #region API Methods
        /// <summary>
        /// Gets a list of assignments for a particular course.
        /// </summary>
        /// <param name="id">ID of the course.</param>
        /// <returns>Returns a list of assignments.</returns>
        [HttpGet("{id:int}", Name = "GetAssignmentsByCourse")]
        public async Task<JsonResult> GetAssignmentsByCourse(int id)
        {
            try
            {
                Course course = await _courseRepo.Get(id, c => c.Assignments);

                if (course == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("Assignments could not be found with course id: {0}", id));
                }

                IEnumerable<Assignment> assignments = course.Assignments;

                var assignmentModel = _mapper.Map<IEnumerable<Assignment>, IEnumerable<AssignmentDTO>>(assignments);
                return Json(assignmentModel);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                return Json(ex.ToString());
            }
        }

        [HttpGet("all", Name = "GetAllAssignments")]
        public async Task<JsonResult> GetAllAssignments(int[] courseList)
        {
            try
            {
                IEnumerable<Course> courses = await _courseRepo.GetAll(c => c.Assignments);

                if (courses == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json("There are no courses in the database.");
                }

                List<Assignment> assignments = new List<Assignment>();

                foreach (Course course in courses)
                {
                    foreach (Assignment assignment in course.Assignments)
                    {
                        assignments.Add(assignment);
                    }
                }

                var assignmentModel = _mapper.Map<IEnumerable<Assignment>, IEnumerable<AssignmentDTO>>(assignments);
                return Json(assignmentModel);
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