using System.Collections.Generic;

namespace Learnbook_Data.Models
{
    public class Department
    {
        public int DepartmentId { get; set; }
        public string Name { get; set; }
        public int UserId { get; set; }
        
        public Instructor Instructor { get; set; }
        public ICollection<Course> Courses { get; set; }
    }
}
