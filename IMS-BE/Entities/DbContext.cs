using Microsoft.EntityFrameworkCore;

namespace IMS_BE.Entities
{
    public class AuthContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public AuthContext(DbContextOptions options) : base(options)
        {

        }
    }

}