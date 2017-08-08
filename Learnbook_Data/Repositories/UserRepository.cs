using Learnbook_Data.Data;
using Learnbook_Data.Interfaces;
using Learnbook_Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Learnbook_Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        #region Properties
        private readonly LearnbookContext _context;
        #endregion

        #region Constructor
        public UserRepository(LearnbookContext context)
        {
            _context = context;
        }
        #endregion

        #region Interface Implementations
        public async Task<User> Get(int id)
        {
            return await _context.Users
                            .Include(r => r.UserRoles)
                            .ThenInclude(r => r.Role)
                            .FirstOrDefaultAsync(u => u.UserId == id);
        }

        public async Task<User> Get(string name)
        {
            return await _context.Users
                            .Include(r => r.UserRoles)
                            .ThenInclude(r => r.Role)
                            .FirstOrDefaultAsync(u => u.Username == name);
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            return await _context.Users
                            .Include(r => r.UserRoles)
                            .ThenInclude(r => r.Role)
                            .ToListAsync();
        }

        public void Add(User user)
        {

        }

        public void Update(User user)
        {

        }

        public void Remove(int id)
        {

        }
        #endregion
    }
}
