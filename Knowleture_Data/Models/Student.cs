using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Knowleture_Data.Models
{
    public class Student : User 
    {
        public string Major { get; set; }

        public ICollection<Enrollment> Enrollments { get; set; }
    }
}
