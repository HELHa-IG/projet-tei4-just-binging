using System.ComponentModel.DataAnnotations;

namespace Just_Binging.Models
{
    public class Episode
    {
        [Key]
        public int Id { get; set; }
        public int Number { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int ShowID { get; set; }
        public Show? Show { get; set; }
    }
}
