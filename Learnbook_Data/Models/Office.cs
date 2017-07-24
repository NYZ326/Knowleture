using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Learnbook_Data.Models
{
    public class Office
    {
        [Key]
        [ForeignKey("Instructor")]
        public int UserId { get; set; }
        public string Location { get; set; }
        public string Days { get; set; }
        public string Hours { get; set; }
        public string OfficeNumber { get; set; }

        public Instructor Instructor { get; set; }
    }
}
