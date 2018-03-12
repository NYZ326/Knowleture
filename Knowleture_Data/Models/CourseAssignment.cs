using Newtonsoft.Json;

namespace Knowleture_Data.Models
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
