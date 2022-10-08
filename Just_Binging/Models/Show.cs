using System.ComponentModel.DataAnnotations;

namespace Just_Binging.Models
{
    public class Show
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string BannerImg { get; set; }
        public ICollection<Episode> Episodes { get; set; }
        public ICollection<User> Users { get; set; }
    }
}
