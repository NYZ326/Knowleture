using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using Newtonsoft.Json;

namespace Learnbook_Data.Models
{
    public class Course
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
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
        [Range(0,5)]
        public int Credit { get; set; }
        public int DepartmentId { get; set; }

        public ICollection<Instructor> Instructors { get; set; }
        public ICollection<Enrollment> Enrollments { get; set; }
        [JsonIgnore]
        public ICollection<CourseAssignment> CourseAssignments { get; set; }
        public ICollection<Assignment> Assignments { get; set; }
    }
}
