using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Learnbook_Data.Models;

namespace Learnbook_Data.Interfaces
{
    interface IUserRepository
    {
        Task<User> Get(int id);
        Task<IEnumerable<User>> GetAll();
        void Add(User user);
        void Update(User user);
        void Remove(int id);
    }
}
