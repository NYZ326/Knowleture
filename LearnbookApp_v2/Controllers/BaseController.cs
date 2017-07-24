using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Learnbook_Data.Data;
using Learnbook_Web.Common;

namespace Learnbook_Web.Controllers
{
    // Global Controller for Properties & Methods
    public class BaseController : Controller
    {
        #region Methods
        public async Task<object[]> GetCourseInfo<T>(LearnbookContext context, string role, T type)
        {
            object[] data = null;
            var value = type.GetType();

            if (value == null)
            {
                return data = null;
            }
            
            if (value == typeof(string))
            {
                string name = type.ToString();

                switch (role.ToLowerInvariant())
                {
                    case Constants.Roles.Instructor:
                        var instructorInfo = await context.Instructors
                                                    .Include(c => c.CourseAssignments)
                                                        .ThenInclude(co => co.Course)
                                                    .Include(c => c.CourseAssignments)
                                                        .ThenInclude(co => co.Course.Assignments)
                                                    .Include(c => c.CourseAssignments)
                                                        .ThenInclude(co => co.Course.Enrollments)
                                                    .FirstOrDefaultAsync(u => u.Username == name);

                        data = instructorInfo.CourseAssignments.ToArray();
                        break;
                    case Constants.Roles.Student:
                        var studentInfo = await context.Students
                                                    .Include(e => e.Enrollments)
                                                        .ThenInclude(c => c.Course)
                                                            .ThenInclude(a => a.Assignments)
                                                    .FirstOrDefaultAsync(u => u.Username == name);

                        data = studentInfo.Enrollments.ToArray();
                        break;
                }
            }
            else if (value == typeof(int))
            {
                int id = Convert.ToInt32(type);

                switch (role.ToLowerInvariant())
                {
                    case Constants.Roles.Instructor:
                        var instructorInfo = await context.Instructors
                                                    .Include(c => c.CourseAssignments)
                                                        .ThenInclude(co => co.Course)
                                                    .Include(c => c.CourseAssignments)
                                                        .ThenInclude(co => co.Course.Assignments)
                                                    .Include(c => c.CourseAssignments)
                                                        .ThenInclude(co => co.Course.Enrollments)
                                                    .FirstOrDefaultAsync(u => u.UserId == id);

                        data = instructorInfo.CourseAssignments.ToArray();
                        break;
                    case Constants.Roles.Student:
                        var studentInfo = await context.Students
                                                    .Include(e => e.Enrollments)
                                                        .ThenInclude(c => c.Course)
                                                            .ThenInclude(a => a.Assignments)
                                                    .FirstOrDefaultAsync(u => u.UserId == id);

                        data = studentInfo.Enrollments.ToArray();
                        break;
                }
            }

            if (data == null || data.Count() == 0)
            {
                return data = null;
            }

            return data;
        }
        #endregion
    }
}