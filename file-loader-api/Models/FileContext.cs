using Microsoft.EntityFrameworkCore;

namespace file_loader_api.Models
{
    public class FileContext : DbContext
    {
        public FileContext(DbContextOptions<FileContext> options) : base(options) { }

        public DbSet<FileLoader> FileLoaders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FileLoader>()
                .HasKey(c => c.Id);

            modelBuilder.Entity<FileLoader>()
                .Property(b => b.Name)
                .IsRequired();

            modelBuilder.Entity<FileLoader>()
                .Property(b => b.Size)
                .IsRequired();

            modelBuilder.Entity<FileLoader>()
                .Property(b => b.Type)
                .IsRequired();

            modelBuilder.Entity<FileLoader>()
                .Property(b => b.Date)
                .IsRequired();

            modelBuilder.Entity<FileLoader>()
                .Property(b => b.User)
                .IsRequired();
        }
    }
}
