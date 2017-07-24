using Newtonsoft.Json;

namespace Learnbook_Data.Models
{
    public class UserRoles
    {
        [JsonIgnore]
        public int UserId { get; set; }
        [JsonIgnore]
        public int RoleId { get; set; }
        
        public User User { get; set; }
        public Role Role { get; set; }
    }
}
