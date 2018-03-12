using Knowleture_Data.Enumerations;
using Knowleture_Data.Models;

namespace Knowleture_Web.Models
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
