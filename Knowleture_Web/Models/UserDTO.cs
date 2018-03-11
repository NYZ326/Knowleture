using System;
using System.Collections.Generic;

using Learnbook_Data.Models;

namespace Knowleture_Web.Models
{
    public class UserDTO
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName
        {
            get
            {
                return FirstName + " " + LastName;
            }
        }
        public string Email { get; set; }
        public string ImageUrl { get; set; }
        public string Gender { get; set; }
        public string Summary { get; set; }
        public bool IsActive { get; set; }
        public DateTime? LastLogin { get; set; }
        public string TwitterLink { get; set; }
        public string FacebookLink { get; set; }
        public string LinkedInLink { get; set; }

        public ICollection<UserRoleDTO> UserRoles { get; set; }
    }
}
