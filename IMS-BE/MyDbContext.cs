using Microsoft.EntityFrameworkCore;
using IMS_BE.Entities;

public class MyDbContext : DbContext
{
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }

    // Define your DbSets (tables) here
    public DbSet<User> Users { get; set; }
}
