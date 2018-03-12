using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using AutoMapper;

using Knowleture_Data.Data;
using Knowleture_Data.Models;
using Knowleture_Web.Models;
using Knowleture_Data.Repositories;


namespace Knowleture_Web.Controllers
{
    [Produces("application/json")]
    [Route("course")]
    public class CourseController : BaseController
    {
        private readonly KnowletureContext _context;
        private CourseRepository _courseRepo { get; set; }
        private readonly IMapper _mapper;

        #region Constructor
        public CourseController(KnowletureContext context, CourseRepository courseRepo, IMapper mapper)
        {
            _context = context;
            _courseRepo = courseRepo;
            _mapper = mapper;
        }
        #endregion

        #region API Methods
        /// <summary>
        /// Gets a list of courses for a specific instructor.
        /// </summary>
        /// <param name="id">ID of the user.</param>
        /// <returns>Returns a list of courses (Type: IEnumerable<Course>).</returns>
        [HttpGet("instructor/{id:int}", Name = "GetInstructorCourses")]
        public async Task<JsonResult> GetInstructorCourses(int id)
        {
            IEnumerable<Course> courses = null;

            try
            {
                Instructor instructorInfo = await _context.Instructors
                                                    .Include(c => c.CourseAssignments)
                                                        .ThenInclude(co => co.Course)
                                                            .ThenInclude(e => e.Enrollments)
                                                    .FirstOrDefaultAsync(u => u.UserId == id); 

                if (instructorInfo == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("Unable to retrieve instructor info with id: {0}", id));
                }

                courses = instructorInfo.CourseAssignments.Select(c => c.Course).ToArray();

                if (courses == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("Courses not found with user id: {0}", id));
                }

                var courseModel = _mapper.Map<IEnumerable<Course>, IEnumerable<CourseDTO>>(courses);
                return Json(courseModel);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                return Json(ex.ToString());
            }
        }

        /// <summary>
        /// Gets a list of enrolled courses for a specific student.
        /// </summary>
        /// <param name="id">ID of the user.</param>
        /// <returns>Returns a list of enrolled courses (Type: IEnumerable<Enrollment>).</returns>
        [HttpGet("student/{id:int}", Name = "GetStudentCourses")]
        public async Task<JsonResult> GetStudentCourses(int id)
        {
            IEnumerable<Enrollment> enrolledCourses = null;

            try
            {
                Student studentInfo = await _context.Students
                                            .Include(e => e.Enrollments)
                                                .ThenInclude(c => c.Course)
                                            .FirstOrDefaultAsync(u => u.UserId == id);

                if (studentInfo == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("Unable to retrieve student info with id: {0}", id));
                }

                enrolledCourses = studentInfo.Enrollments.ToArray();

                if (enrolledCourses == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("Courses not found with user id: {0}", id));
                }

                var enrollmentModel = _mapper.Map<IEnumerable<Enrollment>, IEnumerable<EnrollmentDTO>>(enrolledCourses);
                return Json(enrollmentModel);
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