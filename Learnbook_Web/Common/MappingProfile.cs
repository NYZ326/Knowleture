using AutoMapper;
using Learnbook_Data.Models;
using Learnbook_Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Learnbook_Web.Common
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
        }
    }
}
