using System.Collections.Generic;
using System.Threading.Tasks;

using Knowleture_Data.Models;

namespace Knowleture_Data.Interfaces
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
