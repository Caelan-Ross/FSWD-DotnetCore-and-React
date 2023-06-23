using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace WebApi.Models
{
    public class Vehicle
    {
        //Primary Key
        [Key]
        // Auto incrementing
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // Name and type
        [Column("vehicle_id", TypeName = "int(10)")]
        public int VehicleId { get; set; }

        [Required]
        [Column("vin", TypeName = "varchar(18)")]
        [StringLength(17, MinimumLength = 17, ErrorMessage = "VIN must be exactly 17 characters long.")]
        [RegularExpression(@"^[A-Z0-9]*$", ErrorMessage = "Only Capitols and numbers allowed.")]
        public string VIN { get; set; }

        [Required]
        [Column("model_year", TypeName = "int(4)")]
        [Range(1900, 2050, ErrorMessage = "Model Year must be between 1900 and 2050")]
        public int ModelYear { get; set; }

        [Required]
        [Column("colour", TypeName = "varchar(50)")]
        [StringLength(50, MinimumLength = 4)]
        public string Colour { get; set; }

        [Required]
        [Column("manufacturer", TypeName = "varchar(50)")]
        public string Manufacturer { get; set; }

        [Required]
        [Column("model", TypeName = "varchar(50)")]
        public string Model { get; set; }

        [Required]
        [Column("trim_level", TypeName = "varchar(50)")]
        public string TrimLevel { get; set; }

        [Required]
        [Column("purchase_date")]
        public DateTime PurchaseDate { get; set; }

        [AllowNull]
        [Column("sale_date")]
        public DateTime? SaleDate { get; set; }

        [Required]
        [Column("purchase_amount")]
        public decimal PurchaseAmount { get; set; }

        [AllowNull]
        [Column("sale_amount")]
        public decimal? SaleAmount { get; set; }
    }
}



