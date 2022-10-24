using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Just_Binging.Models
{
    public class TokenWallet
    {
        [Key]
        public int TokenWalletId { get; set; }
        public string Token { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        [JsonIgnore]
        public virtual User user { get; set; }
    }
}
