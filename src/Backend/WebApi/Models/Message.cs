using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Message
    {
        //Primary Key
        [Key]
        // Auto incrementing
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // Name and type
        [Column("message_id", TypeName = "int(10)")]
        public int MessageId { get; set; }

        [Required]
        [Column("text", TypeName = "varchar(128)")]
        public string Text { get; set; }
    }
}
