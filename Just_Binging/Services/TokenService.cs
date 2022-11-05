using Just_Binging.Models;
using Microsoft.EntityFrameworkCore;

namespace SecureAPIExemple.Services
{
    public class TokenService
    {
        public static bool IsTokenValid(string Token, DbSet<TokenWallet> TokenWallets)
        {
            if (Token == null)
            {
                return false;
            }
            TokenWallet tw = TokenWallets.FirstOrDefault(T => T.Token == Token);
            if (tw == null)
            {
                return false;
            }
            return true;
        }
    }
}