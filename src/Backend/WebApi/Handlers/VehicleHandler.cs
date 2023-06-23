using WebApi.Data;
using WebApi.Models;

namespace WebApi.Handlers
{
    public static class VehicleHandler
    {
        // Create
        public static Vehicle CreateVehicle(string VIN, int modelYear, string colour,
            string manufacturer, string model, string trimLevel, DateTime purchaseDate,
            decimal purchaseAmount, DateTime? saleDate = null, decimal? saleAmount = null)
        {
            using(ApplicationDbContext _context = new ApplicationDbContext())
            {
                Vehicle vehicle = new Vehicle
                {
                    VIN= VIN,
                    ModelYear = modelYear,
                    Colour = colour,
                    Manufacturer = manufacturer,
                    Model = model,
                    TrimLevel = trimLevel,
                    PurchaseDate = purchaseDate,
                    PurchaseAmount = purchaseAmount,
                    SaleDate = saleDate,
                    SaleAmount = saleAmount
                };
                _context.Vehicles.Add(vehicle);
                _context.SaveChanges();

                return vehicle;
            }
        }

        // Read (Single)
        public static Vehicle GetVehicleById(int id)
        {
            using(ApplicationDbContext _context = new ApplicationDbContext())
            {
                Vehicle vehicle = _context.Vehicles.FirstOrDefault(m => m.VehicleId == id);
                return vehicle;
            }
        }

        // Read (All)
        public static List<Vehicle> GetAllVehicles()
        {
            using(ApplicationDbContext _context = new ApplicationDbContext())
            {
                List<Vehicle> vehicles = _context.Vehicles.ToList();
                return vehicles;
            }
        }

        // Update
        public static Vehicle UpdateVehicle(Vehicle vehicle)
        {
            using(ApplicationDbContext _context = new ApplicationDbContext())
            {
                Vehicle existingVehicle = _context.Vehicles.Find(vehicle.VehicleId);

                if(existingVehicle == null)
                {
                    return null;
                }

                existingVehicle.VIN = vehicle.VIN;
                existingVehicle.ModelYear = vehicle.ModelYear;
                existingVehicle.Colour = vehicle.Colour;
                existingVehicle.Manufacturer= vehicle.Manufacturer;
                existingVehicle.Model = vehicle.Model;
                existingVehicle.TrimLevel = vehicle.TrimLevel;
                existingVehicle.PurchaseDate = vehicle.PurchaseDate;
                existingVehicle.PurchaseAmount = vehicle.PurchaseAmount;
                existingVehicle.SaleDate = vehicle.SaleDate;
                existingVehicle.SaleAmount = vehicle.SaleAmount;

                _context.SaveChanges();

                return existingVehicle;
            }
        }

        // Delete
        public static void DeleteVehicle(Vehicle vehicle)
        {
            using(ApplicationDbContext _context = new ApplicationDbContext())
            {
                Vehicle existingVehicle = _context.Vehicles.Find(vehicle.VehicleId);
                if(existingVehicle == null)
                {
                    return;
                }

                _context.Vehicles.Remove(existingVehicle);
                _context.SaveChanges();
            }
        }
    }
}
