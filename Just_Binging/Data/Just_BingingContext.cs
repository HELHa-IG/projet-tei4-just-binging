using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Just_Binging.Models;

namespace Just_Binging.Data
{
    public class Just_BingingContext : DbContext
    {
        public Just_BingingContext(DbContextOptions<Just_BingingContext> options)
            : base(options)
        {
        }

        public DbSet<Just_Binging.Models.Episode> Episode { get; set; } = default!;

        public DbSet<Just_Binging.Models.User> User { get; set; }

        public DbSet<Just_Binging.Models.TokenWallet> TokenWallet { get; set; }
        public string TokenWallets { get; internal set; }
    }
}
