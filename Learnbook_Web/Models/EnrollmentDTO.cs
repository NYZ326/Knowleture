using Learnbook_Data.Enumerations;
using Learnbook_Data.Models;

namespace Learnbook_Web.Models
{
    public class EnrollmentDTO
    {
        public int EnrollId { get; set; }
        public int CourseId { get; set; }
        public int UserId { get; set; }
        public string Term { get; set; }
        public int Year { get; set; }
        public Grade? Grade { get; set; }
    }
}
