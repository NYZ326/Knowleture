using System;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Collections.Generic;

using Knowleture_Data.Models;

namespace Knowleture_Data.Interfaces
{
    interface ICourseRepository
    {
        Task<Course> Get<T>(int id, Expression<Func<Course, T>> query);
        Task<Course> Get<T>(string name, Expression<Func<Course, T>> query);
        Task<IEnumerable<Course>> GetAll<T>(Expression<Func<Course, T>> query);
        void Add(Course course);
        void Update(Course course);
        void Remove(int id);
    }
}
