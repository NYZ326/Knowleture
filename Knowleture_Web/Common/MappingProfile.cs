using AutoMapper;
using Knowleture_Data.Models;
using Knowleture_Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Knowleture_Web.Common
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserDTO>();
            CreateMap<UserDTO, User>();
            CreateMap<Role, RoleDTO>();
            CreateMap<RoleDTO, Role>();
            CreateMap<UserRoles, UserRoleDTO>();
            CreateMap<UserRoleDTO, UserRoles>();
            CreateMap<Course, CourseDTO>();
            CreateMap<CourseDTO, Course>();
            CreateMap<Enrollment, EnrollmentDTO>();
            CreateMap<EnrollmentDTO, Enrollment>();
            CreateMap<Assignment, AssignmentDTO>();
            CreateMap<AssignmentDTO, Assignment>();
        }
    }
}
