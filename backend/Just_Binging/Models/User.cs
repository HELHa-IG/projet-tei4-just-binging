using System.ComponentModel.DataAnnotations;

namespace Just_Binging.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public int Type { get; set; }
        public string Name { get; set; }
        public string Firstname { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public ICollection<Show>? Shows { get; set; }
    }
}
