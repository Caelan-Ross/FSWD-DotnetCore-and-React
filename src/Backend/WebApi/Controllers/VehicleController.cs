using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VehicleController : Controller
    {
        private readonly ILogger<MessageController> _logger;

        public VehicleController(ILogger<MessageController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Create()
        {

        }
    }
}
