﻿using System.Collections.Generic;

namespace Knowleture_Data.Models
{
    public class Instructor : User
    {
        public string Department { get; set; }

        public ICollection<CourseAssignment> CourseAssignments { get; set; }
        public Office Office { get; set; }
    }
}
