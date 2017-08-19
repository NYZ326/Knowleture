using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Learnbook_Data.Interfaces;
using Learnbook_Data.Data;
using Learnbook_Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Learnbook_Data.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        #region Properties
        private readonly LearnbookContext _context;
        #endregion

        #region Constructor
        public CourseRepository(LearnbookContext context)
        {
            _context = context;
        }
        #endregion

        #region Interface Implementations
        /// <summary>
        /// Gets a course info based on ID.
        /// </summary>
        /// <param name="id">ID of a course.</param>
        /// <returns>Returns a specific course information based on ID (Type: Course).</returns>
        public async Task<Course> Get<T>(int id, Expression<Func<Course, T>> query)
        {
            if (query != null)
            {
                return await _context.Courses
                                .Include(query)
                            .FirstOrDefaultAsync(c => c.CourseId == id);
            }
            else
            {
                return await _context.Courses
                            .FirstOrDefaultAsync(c => c.CourseId == id);
            }
            
        }

        /// <summary>
        /// Gets a course based on course title.
        /// </summary>
        /// <param name="courseName">Title of a course.</param>
        /// <returns>Returns a specific course information based on course title (Type: Course).</returns>
        public async Task<Course> Get<T>(string courseName, Expression<Func<Course, T>> query)
        {
            return await _context.Courses
                            .FirstOrDefaultAsync(c => c.Title == courseName);
        }

        public async Task<IEnumerable<Course>> GetAll<T>(Expression<Func<Course, T>> query)
        {
            if (query != null)
            {
                return await _context.Courses
                                .Include(query).ToArrayAsync();
            }
            else
            {
                return await _context.Courses.ToArrayAsync();
            }
        }

        /// <summary>
        /// Adds a new course to the database.
        /// </summary>
        /// <param name="user">Course object.</param>
        public void Add(Course course)
        {

        }

        /// <summary>
        /// Updates/Changes to a specific course.
        /// </summary>
        /// <param name="user">Course object.</param>
        public void Update(Course course)
        {

        }

        /// <summary>
        /// Removes/Deletes a specific course.
        /// </summary>
        /// <param name="id">ID of a course.</param>
        public void Remove(int id)
        {

        }
        #endregion
    }
}
