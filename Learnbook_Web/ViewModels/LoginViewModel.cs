using System.ComponentModel.DataAnnotations;

namespace Learnbook_Web.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "User ID cannot be empty")]
        [Display(Name = "User ID")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password cannot be empty")]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}
