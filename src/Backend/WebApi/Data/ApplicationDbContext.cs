using WebApi.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {

        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        // Order Dbset from child table to parent table
        public DbSet<Message> Messages { get; set; }

        /************************
         *      CONNECTION       *
         ************************/
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // If context is not already configured;
            if(!optionsBuilder.IsConfigured)
            {
                // Specify the connection to the database
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;database=dotnet-with-react ", new MySqlServerVersion(new Version(10, 10, 3)));
            }
        }

        /************************
         *      ENTITIES         *
         ************************/
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Message>()
                .HasData(
                    new Message
                    {
                        MessageId = 1,
                        Text = "This is a test message."
                    },
                    new Message
                    {
                        MessageId = 2,
                        Text = "I really like working in C#!"
                    },
                    new Message
                    {
                        MessageId = 3,
                        Text = "I really like working in Javascript!"
                    },
                    new Message
                    {
                        MessageId = 4,
                        Text = "Anyone else playing Diablo IV?"
                    },
                    new Message
                    {
                        MessageId = 5,
                        Text = "The meaning of life isn't about the what is seen through the eye of the beholder, but what the brain behind it percieves."
                    }
                );
        }
    }
}
