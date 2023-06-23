using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Drawing;
using System.Text.RegularExpressions;
using WebApi.Handlers;
using WebApi.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class VehicleController : Controller
    {
        private readonly ILogger<MessageController> _logger;

        public VehicleController(ILogger<MessageController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Create(string VIN, int modelYear, string colour,
            string manufacturer, string model, string trimLevel, DateTime purchaseDate,
            decimal purchaseAmount, DateTime? saleDate = null, decimal? saleAmount = null)
        {
            List<string> Errors = new List<string>();

            if(!modelYear.ToString().IsNullOrEmpty())
            {
                if(modelYear < 1900 || modelYear > DateTime.Now.Year + 2)
                {
                    Errors.Add("Model Year must be between 1900 and the current year plus one.");
                }
            }

            if(!purchaseDate.ToString().IsNullOrEmpty())
            {
                if(purchaseDate > DateTime.Now)
                {
                    Errors.Add("Purchase date must be in the past.");
                }
            }

            if(!saleDate.ToString().IsNullOrEmpty())
            {
                if(saleDate < purchaseDate)
                {
                    Errors.Add("Sale date must after the purchase date.");
                }
            }

            // Final check
            if(Errors.Count > 0)
            {
                return BadRequest(Errors);
            }
            else
            {
                Vehicle vehicle = VehicleHandler.CreateVehicle(VIN, modelYear, colour, manufacturer, model, 
                    trimLevel, purchaseDate, purchaseAmount, saleDate, saleAmount);

                return Ok(vehicle);
            }
        }

        [HttpPut]
        public IActionResult Update(int vehicleId, string? VIN = null, int? modelYear = null, string? colour = null,
            string? manufacturer = null, string? model = null, string? trimLevel = null, DateTime? purchaseDate = null,
            decimal? purchaseAmount = null, DateTime? saleDate = null, decimal? saleAmount = null)
        {
            List<string> Errors = new List<string>();
            Vehicle vehicle = VehicleHandler.GetVehicleById(vehicleId);

            if(VIN != null)
            {
                vehicle.VIN = VIN;
            }

            if(modelYear != null)
            {
                if(modelYear < 1900 || modelYear > DateTime.Now.Year + 2)
                {
                    Errors.Add("Model Year must be between 1900 and the current year plus one.");
                }
                vehicle.ModelYear = (int)modelYear;
            }

            if(colour != null)
            {
                vehicle.Colour = colour;
            }

            if(manufacturer != null)
            {
                vehicle.Manufacturer = manufacturer;
            }

            if(model!= null)
            {
                vehicle.Model = model;
            }

            if(trimLevel != null)
            {
                vehicle.TrimLevel = trimLevel;
            }

            if(purchaseDate != null)
            {
                if(purchaseDate > DateTime.Now)
                {
                    Errors.Add("Purchase date must be in the past.");
                }
                vehicle.PurchaseDate = (DateTime)purchaseDate;
            }

            if(purchaseAmount != null)
            {
                vehicle.PurchaseAmount = (decimal)purchaseAmount;
            }

            if(saleDate != null)
            {
                if(saleDate < purchaseDate)
                {
                    Errors.Add("Sale date must after the purchase date.");
                }
                vehicle.SaleDate = saleDate;
            }

            if(purchaseAmount != null)
            {
                vehicle.PurchaseAmount = (decimal)purchaseAmount;
            }

            // Final check
            if(Errors.Count > 0)
            {
                return BadRequest(Errors);
            }
            else
            {
                VehicleHandler.UpdateVehicle(vehicle);

                return Ok($"Vehicle successfully updated with id: {vehicle.VehicleId}");
            }
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            try
            {
                Vehicle vehicle = VehicleHandler.GetVehicleById(id);
                VehicleHandler.DeleteVehicle(vehicle);
                return Ok($"Successfully deleted vehicle with id: {id}");
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                List<Vehicle> vehicles = VehicleHandler.GetAllVehicles();
                return Ok(vehicles);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet]
        public IActionResult Get(int id)
        {
            try
            {
                Vehicle vehicle = VehicleHandler.GetVehicleById(id);
                return Ok(vehicle);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
