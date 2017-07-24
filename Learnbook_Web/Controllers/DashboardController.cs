using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Learnbook_Web.Controllers
{
    [Authorize]
    public class DashboardController : BaseController
    {
        [Authorize(Roles = "Instructor, Student")]
        public IActionResult Index()
        {
            return View();
        }
    }
}