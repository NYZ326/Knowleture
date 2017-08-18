using System;
using System.Net;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using AutoMapper;

using Learnbook_Data.Data;
using Learnbook_Data.Models;
using Learnbook_Web.Models;

namespace Learnbook_Web.Controllers
{
    [Produces("application/json")]
    [Route("course")]
    public class CourseController : BaseController
    {
        private readonly LearnbookContext _context;
        private readonly IMapper _mapper;

        #region Constructor
        public CourseController(LearnbookContext context, IMapper mapper)
        {
            _context = context;
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
                courses = await GetInstructorCourseInfo(_context, id);

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
        /// Gets a list of courses for a specific instructor.
        /// </summary>
        /// <param name="id">Username of a user.</param>
        /// <returns>Returns a list of courses (Type: IEnumerable<Course>).</returns>
        [HttpGet("instructor/{name}", Name = "GetInstructorCoursesByName")]
        public async Task<JsonResult> GetInstructorCoursesByName(string name)
        {
            IEnumerable<Course> courses = null;

            try
            {
                courses = await GetInstructorCourseInfo(_context, name);

                if (courses == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("Courses could not be found with username: {0}", name));
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
                enrolledCourses = await GetStudentCourseInfo(_context, id);

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

        /// <summary>
        /// Gets a list of courses for a specific instructor.
        /// </summary>
        /// <param name="id">Username of a user.</param>
        /// <returns>Returns a list of courses (Type: IEnumerable<Course>).</returns>
        [HttpGet("student/{name}", Name = "GetStudentCoursesByName")]
        public async Task<JsonResult> GetStudentCoursesByName(string name)
        {
            IEnumerable<Enrollment> enrolledCourses = null;

            try
            {
                enrolledCourses = await GetStudentCourseInfo(_context, name);

                if (enrolledCourses == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(string.Format("Courses could not be found with username: {0}", name));
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