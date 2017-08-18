using System.Collections.Generic;

using Learnbook_Data.Models;

namespace Learnbook_Web.Models
{
    public class CourseDTO
    {
        public int CourseId { get; set; }
        public string Title { get; set; }
        public string Subject { get; set; }
        public string Code { get; set; }
        public string Term { get; set; }
        public int Year { get; set; }
        public string FullTerm
        {
            get
            {
                return Term + " " + Year;
            }
        }
        public int Credit { get; set; }
        public int DepartmentId { get; set; }

        public ICollection<EnrollmentDTO> Enrollments { get; set; }
        public ICollection<AssignmentDTO> Assignments { get; set; }
    }
}
