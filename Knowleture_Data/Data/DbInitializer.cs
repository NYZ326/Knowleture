using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Knowleture_Data.Models;

namespace Knowleture_Data.Data
{
    public static class DbInitializer
    {
        public static void Initialize(KnowletureContext context)
        {
            context.Database.EnsureCreated();

            if (context.Students.Any())
            {
                return; // Seed is already implemented
            }


            #region Seed Roles
            //Roles
            var roles = new List<Role> {
                new Role
                {
                    RoleName = "Instructor",
                    Description = "Instructors of School"
                },
                new Role
                {
                    RoleName = "Student",
                    Description = "Students of School"
                }
            };

            foreach (Role r in roles)
            {
                context.Roles.Add(r);
            }

            context.SaveChanges();
            #endregion

            #region Seed Students
            byte[] studentPasswordHash1, studentPasswordSalt1;
            CreatePasswordHash("zdaud123", out studentPasswordHash1, out studentPasswordSalt1);

            byte[] studentPasswordHash2, studentPasswordSalt2;
            CreatePasswordHash("aSundara123", out studentPasswordHash2, out studentPasswordSalt2);

            // Students
            var students = new Student[]
            {
                new Student
                {
                    Username = "zdaud",
                    PasswordHash = studentPasswordHash1,
                    PasswordSalt = studentPasswordSalt1,
                    FirstName = "Zuhib",
                    LastName = "Daud",
                    Email = "zdaud@learnbook.com",
                    ImageUrl = "../img/users/zdaudPortrait.jpg",
                    Gender = "Male",
                    Summary = String.Empty,
                    Major = "Information Technology",
                    TwitterLink = String.Empty,
                    FacebookLink = String.Empty,
                    LinkedInLink = String.Empty,
                    IsActive = true,
                    DateCreated = DateTime.UtcNow
                },
                new Student
                {
                    Username = "aSundara",
                    PasswordHash = studentPasswordHash2,
                    PasswordSalt = studentPasswordSalt2,
                    FirstName = "Ananth",
                    LastName = "Sundaramoorthy",
                    Email = "aSundara@learnbook.com",
                    ImageUrl = "../img/users/aSundaraPortrait.jpg",
                    Gender = "Male",
                    Summary = String.Empty,
                    Major = "Audio Engineer",
                    TwitterLink = String.Empty,
                    FacebookLink = String.Empty,
                    LinkedInLink = String.Empty,
                    IsActive = true,
                    DateCreated = DateTime.UtcNow
                }
            };

            foreach(Student s in students)
            {
                context.Users.Add(s);
            }

            context.SaveChanges();
            #endregion

            #region Seed Instructors
            byte[] instructorPasswordHash1, instructorPasswordSalt1;
            CreatePasswordHash("pyork123", out instructorPasswordHash1, out instructorPasswordSalt1);

            // Instructors
            var instructors = new Instructor[]
            {
                new Instructor
                {
                    Username = "pyork",
                    PasswordHash = instructorPasswordHash1,
                    PasswordSalt = instructorPasswordSalt1,
                    FirstName = "Paul",
                    LastName = "York",
                    Email = "pyork@learnbook.com",
                    ImageUrl = "../img/users/pyorkPortrait.jpg",
                    Gender = "Male",
                    Summary = String.Empty,
                    Department = "Computer Science",
                    TwitterLink = String.Empty,
                    FacebookLink = String.Empty,
                    LinkedInLink = String.Empty,
                    IsActive = true,
                    DateCreated = DateTime.UtcNow
                }
            };

            foreach (Instructor i in instructors)
            {
                context.Users.Add(i);
            }
            context.SaveChanges();
            #endregion

            #region Seed Departments
            // Departments
            var departments = new Department[]
            {
                new Department
                {
                    Name = "Computer Science",
                    UserId = instructors.Single(i => i.LastName == "York").UserId
                }
            };

            foreach (Department d in departments)
            {
                context.Departments.Add(d);
            }
            context.SaveChanges();
            #endregion

            #region Seed Courses
            // Courses
            var courses = new Course[]
            {
                new Course
                {
                    CourseId = 1301,
                    Title = "Computer Programming I",
                    Subject = "Computer Science",
                    Code = "CSCI",
                    Term = "Fall",
                    Year = 2016,
                    Credit = 4,
                    DepartmentId = departments.Single(d => d.Name == "Computer Science").DepartmentId,
                    Instructors = new List<Instructor>()
                },
                new Course
                {
                    CourseId = 1302,
                    Title = "Computer Programming II",
                    Subject = "Computer Science",
                    Code = "CSCI",
                    Term = "Spring",
                    Year = 2017,
                    Credit = 4,
                    DepartmentId = departments.Single(d => d.Name == "Computer Science").DepartmentId,
                    Instructors = new List<Instructor>()
                },
                new Course
                {
                    CourseId = 1310,
                    Title = "Beginner's Javascript Programming",
                    Subject = "Computer Science",
                    Code = "CSCI",
                    Term = "Spring",
                    Year = 2017,
                    Credit = 3,
                    DepartmentId = departments.Single(d => d.Name == "Computer Science").DepartmentId,
                    Instructors = new List<Instructor>()
                },
                new Course
                {
                    CourseId = 1311,
                    Title = "Advanced Javascript Programming",
                    Subject = "Computer Science",
                    Code = "CSCI",
                    Term = "Fall",
                    Year = 2017,
                    Credit = 4,
                    DepartmentId = departments.Single(d => d.Name == "Computer Science").DepartmentId,
                    Instructors = new List<Instructor>()
                },
                new Course
                {
                    CourseId = 1330,
                    Title = "Internet Programming",
                    Subject = "Computer Science",
                    Code = "CSCI",
                    Term = "Fall",
                    Year = 2017,
                    Credit = 4,
                    DepartmentId = departments.Single(d => d.Name == "Computer Science").DepartmentId,
                    Instructors = new List<Instructor>()
                },
                new Course
                {
                    CourseId = 1320,
                    Title = "System Administration Course",
                    Subject = "Computer Science",
                    Code = "CSCI",
                    Term = "Fall",
                    Year = 2017,
                    Credit = 4,
                    DepartmentId = departments.Single(d => d.Name == "Computer Science").DepartmentId,
                    Instructors = new List<Instructor>()
                }
            };

            foreach (Course c in courses)
            {
                context.Courses.Add(c);
            }
            context.SaveChanges();
            #endregion

            #region Seed Enrollments
            // Enrollments
            var enrollments = new Enrollment[]
            {
                new Enrollment
                {
                    CourseId = courses.Single(c => c.Title == "Computer Programming I").CourseId,
                    UserId = students.Single(s => s.LastName == "Daud").UserId,
                    Term = "Fall",
                    Year = 2016,
                    Grade = null
                },
                new Enrollment
                {
                    CourseId = courses.Single(c => c.Title == "Computer Programming II").CourseId,
                    UserId = students.Single(s => s.LastName == "Daud").UserId,
                    Term = "Spring",
                    Year = 2017,
                    Grade = null
                },
                new Enrollment
                {
                    CourseId = courses.Single(c => c.Title == "Computer Programming I").CourseId,
                    UserId = students.Single(s => s.LastName == "Sundaramoorthy").UserId,
                    Term = "Fall",
                    Year = 2016,
                    Grade = null
                }
            };

            foreach (Enrollment e in enrollments)
            {
                var enrollmentInDataBase = context.Enrollments.Where(
                    s =>
                            s.Student.UserId == e.UserId &&
                            s.Course.CourseId == e.CourseId).SingleOrDefault();
                if (enrollmentInDataBase == null)
                {
                    context.Enrollments.Add(e);
                }
            }
            context.SaveChanges();
            #endregion

            #region Seed Assignments
            //Assignments
            var assignments = new Assignment[]
            {
                new Assignment
                {
                    CourseId = courses.Single(c => c.Title == "Computer Programming I").CourseId,
                    Title = "Program Assignment",
                    Objective = "Create a program that gets a sum of two numbers.",
                    StartDate = DateTime.UtcNow,
                    DueDate = new DateTime(2016,11,25),
                    MaxScore = 100,
                    AverageScore = 0,
                    AllowUpload = true,
                    FileType = "zip",
                    UploadDirectory = "/"
                },
                new Assignment
                {
                    CourseId = courses.Single(c => c.Title == "Computer Programming I").CourseId,
                    Title = "Program Assignment 2",
                    Objective = "Create a program that gets a multiplication of two numbers.",
                    StartDate = DateTime.UtcNow,
                    DueDate = new DateTime(2016,11,27),
                    MaxScore = 100,
                    AverageScore = 0,
                    AllowUpload = true,
                    FileType = "zip",
                    UploadDirectory = "/"
                },
                new Assignment
                {
                    CourseId = courses.Single(c => c.Title == "Computer Programming II").CourseId,
                    Title = "Advance Program Assignment",
                    Objective = "Create a program can hack into a network and get the password used for the network.",
                    StartDate = DateTime.UtcNow,
                    DueDate = new DateTime(2016,12,1),
                    MaxScore = 100,
                    AverageScore = 0,
                    AllowUpload = true,
                    FileType = "zip",
                    UploadDirectory = "/"
                }
            };

            foreach (Assignment a in assignments)
            {
                context.Assignments.Add(a);
            }
            context.SaveChanges();
            #endregion

            #region Seed Offices
            var offices = new Office[]
            {
                new Office
                {
                    UserId = instructors.Single(i => i.LastName == "York").UserId,
                    Location = "AH 132",
                    Days = "Monday,Tuesday,Wednesday,Thursday",
                    Hours = "11 am - 4 pm",
                    OfficeNumber = "7064513420"
                }
            };

            foreach(Office o in offices)
            {
                context.Offices.Add(o);
            }
            context.SaveChanges();
            #endregion

            #region Seed CourseAssignments
            // Course Assignments
            var courseAssignments = new CourseAssignment[]
            {
                new CourseAssignment
                {
                    CourseId = courses.Single(c => c.Title == "Computer Programming I").CourseId,
                    UserId = instructors.Single(i => i.LastName == "York").UserId
                },
                new CourseAssignment
                {
                    CourseId = courses.Single(c => c.Title == "Computer Programming II").CourseId,
                    UserId = instructors.Single(i => i.LastName == "York").UserId
                },
                new CourseAssignment
                {
                    CourseId = courses.Single(c => c.Title == "Beginner's Javascript Programming").CourseId,
                    UserId = instructors.Single(i => i.LastName == "York").UserId
                },
                new CourseAssignment
                {
                    CourseId = courses.Single(c => c.Title == "Advanced Javascript Programming").CourseId,
                    UserId = instructors.Single(i => i.LastName == "York").UserId
                },
                new CourseAssignment
                {
                    CourseId = courses.Single(c => c.Title == "Internet Programming").CourseId,
                    UserId = instructors.Single(i => i.LastName == "York").UserId
                }
            };

            foreach (CourseAssignment ca in courseAssignments)
            {
                context.CourseAssignments.Add(ca);
            }
            context.SaveChanges();
            #endregion

            #region Seed UserRoles
            // User Roles
            var userRoles = new UserRoles[]
            {
                new UserRoles
                {
                    UserId = instructors.Single(i => i.LastName == "York").UserId,
                    RoleId = roles.Single(r => r.RoleName == "Instructor").RoleId
                },
                new UserRoles
                {
                    UserId = students.Single(i => i.LastName == "Daud").UserId,
                    RoleId = roles.Single(r => r.RoleName == "Student").RoleId
                },
                new UserRoles
                {
                    UserId = students.Single(i => i.LastName == "Sundaramoorthy").UserId,
                    RoleId = roles.Single(r => r.RoleName == "Student").RoleId
                }
            };

            foreach (UserRoles ur in userRoles)
            {
                context.UserRoles.Add(ur);
            }
            context.SaveChanges();
            #endregion
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null)
            {
                throw new ArgumentNullException("password");
            }

            if (string.IsNullOrWhiteSpace(password))
            {
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            }

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
