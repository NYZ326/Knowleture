using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Learnbook_Data.Data;
using Learnbook_Web.Common;
using Learnbook_Data.Models;

namespace Learnbook_Web.Controllers
{
    // Global Controller for Properties & Methods
    public class BaseController : Controller
    {
        #region Global Methods
        public async Task<IEnumerable<Course>> GetInstructorCourseInfo<T>(LearnbookContext context, T type)
        {
            IEnumerable<Course> courseList = null;
            var value = type.GetType();

            if (value == null)
            {
                return courseList = null;
            }
            
            if (value == typeof(string))
            {
                string name = type.ToString();

                var instructorInfo = await context.Instructors
                                            .Include(c => c.CourseAssignments)
                                                .ThenInclude(co => co.Course)
                                                    .ThenInclude(e => e.Enrollments)
                                            .FirstOrDefaultAsync(u => u.Username == name);

                courseList = instructorInfo.CourseAssignments.Select(c => c.Course).ToArray();
            }
            else if (value == typeof(int))
            {
                int id = Convert.ToInt32(type);

                var instructorInfo = await context.Instructors
                                            .Include(c => c.CourseAssignments)
                                                .ThenInclude(co => co.Course)
                                                    .ThenInclude(e => e.Enrollments)
                                            .FirstOrDefaultAsync(u => u.UserId == id);

                courseList = instructorInfo.CourseAssignments.Select(c => c.Course).ToArray();
            }

            if (courseList == null || courseList.Count() == 0)
            {
                return courseList = null;
            }

            return courseList;
        }

        public async Task<IEnumerable<Enrollment>> GetStudentCourseInfo<T>(LearnbookContext context, T type)
        {
            IEnumerable<Enrollment> enrollmentList = null;
            var value = type.GetType();

            if (value == null)
            {
                return enrollmentList = null;
            }

            if (value == typeof(string))
            {
                string name = type.ToString();

                var studentInfo = await context.Students
                                            .Include(e => e.Enrollments)
                                                .ThenInclude(c => c.Course)
                                            .FirstOrDefaultAsync(u => u.Username == name);

                enrollmentList = studentInfo.Enrollments.ToArray();
            }
            else if (value == typeof(int))
            {
                int id = Convert.ToInt32(type);

                var studentInfo = await context.Students
                                            .Include(e => e.Enrollments)
                                                .ThenInclude(c => c.Course)
                                            .FirstOrDefaultAsync(u => u.UserId == id);

                enrollmentList = studentInfo.Enrollments.ToArray();
            }

            if (enrollmentList == null || enrollmentList.Count() == 0)
            {
                return enrollmentList = null;
            }

            return enrollmentList;
        }
        #endregion
    }
}