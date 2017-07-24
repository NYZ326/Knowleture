using Newtonsoft.Json;

namespace Learnbook_Data.Models
{
    public class CourseAssignment
    {
        public int UserId { get; set; }
        public int CourseId { get; set; }

        [JsonIgnore]
        public Instructor Instructor { get; set; }
        public Course Course { get; set; }
    }
}
