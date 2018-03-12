using System.Collections.Generic;

using Newtonsoft.Json;

namespace Knowleture_Data.Models
{
    public class Role
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public string Description { get; set; }

        [JsonIgnore]
        public ICollection<UserRoles> UserRoles { get; set; }
    }
}
