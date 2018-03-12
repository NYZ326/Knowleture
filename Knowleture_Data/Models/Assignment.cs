using System;

using Newtonsoft.Json;

namespace Knowleture_Data.Models
{
    public class Assignment
    {
        public int AssignmentId { get; set; }
        public int CourseId { get; set; }
        public string Title { get; set; }
        public string Objective { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime DueDate { get; set; }
        public int MaxScore { get; set; }
        public int AverageScore { get; set; }
        public bool AllowUpload { get; set; }
        public string FileType { get; set; }
        public string UploadDirectory { get; set; }

        [JsonIgnore]
        public Course Course { get; set; }
    }
}
