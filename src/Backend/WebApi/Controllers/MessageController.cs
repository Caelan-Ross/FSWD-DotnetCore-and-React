using Microsoft.AspNetCore.Mvc;
using WebApi.Handlers;
using WebApi.Models;

namespace WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class MessageController : Controller
{
    private readonly ILogger<MessageController> _logger;

    public MessageController(ILogger<MessageController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult Get()
    {
        Random rnd = new Random();


        // Check the 'Accept' header
        string contentType = Request.Headers["content-type"];
        if(contentType != "application/json" && contentType != "text/plain")
        {
            // Respond with 412 if the 'Accept' header is not supported
            return StatusCode(412);
        }

        List<Message> Messages = MessageHandler.GetAllMessages();

        Message message = Messages[new Random().Next(Messages.Count())];

        if(contentType == "application/json")
        {
            // Respond with JSON
            return Ok(message);
        }
        else if(contentType == "text/plain")
        {
            // Respond with plain text
            return Content(message.Text, "text/plain");
        }

        // This should never be reached due to the check above
        return StatusCode(412);
    }
}

