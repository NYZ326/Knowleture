using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using Learnbook_Data.Data;
using Learnbook_Data.Interfaces;
using Learnbook_Data.Models;

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
        /// <summary>
        /// Get user by ID.
        /// </summary>
        /// <param name="id">ID of the user.</param>
        /// <returns>Returns user information based on ID (Type: User).</returns>
        public async Task<User> Get(int id)
        {
            return await _context.Users
                            .Include(r => r.UserRoles)
                            .ThenInclude(r => r.Role)
                            .FirstOrDefaultAsync(u => u.UserId == id);
        }

        /// <summary>
        /// Get user by Username.
        /// </summary>
        /// <param name="name">User's username.</param>
        /// <returns>Returns user information based on the username (Type: User).</returns>
        public async Task<User> Get(string name)
        {
            return await _context.Users
                            .Include(r => r.UserRoles)
                            .ThenInclude(r => r.Role)
                            .FirstOrDefaultAsync(u => u.Username == name);
        }

        /// <summary>
        /// Gets a list of users.
        /// </summary>
        /// <returns>Returns a list of users (Type: IEnumerable).</returns>
        public async Task<IEnumerable<User>> GetAll()
        {
            return await _context.Users
                            .Include(r => r.UserRoles)
                            .ThenInclude(r => r.Role)
                            .ToListAsync();
        }

        /// <summary>
        /// Adds a new user to the database.
        /// </summary>
        /// <param name="user">User object.</param>
        public void Add(User user)
        {

        }

        /// <summary>
        /// Updates/Changes to a specific user.
        /// </summary>
        /// <param name="user">User object.</param>
        public void Update(User user)
        {

        }

        /// <summary>
        /// Removes/Deletes a specific user.
        /// </summary>
        /// <param name="id">ID of the user.</param>
        public void Remove(int id)
        {

        }
        #endregion
    }
}
