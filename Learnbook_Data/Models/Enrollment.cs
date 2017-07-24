using System.ComponentModel.DataAnnotations;

using Newtonsoft.Json;

using Learnbook_Data.Enumerations;


namespace Learnbook_Data.Models
{
    public class Enrollment
    {
        [Key]
        public int EnrollId { get; set; }
        public int CourseId { get; set; }
        public int UserId { get; set; }
        public string Term { get; set; }
        public int Year { get; set; }
        public Grade? Grade { get; set; }

        public Course Course { get; set; }
        [JsonIgnore]
        public Student Student { get; set; }
    }
}
