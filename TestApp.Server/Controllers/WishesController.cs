using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TestApp.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class WishesController : ControllerBase
{

    [HttpGet(Name = "GetWishes")]
    public IResult Get()
    {

        var path = Path.Combine(Directory.GetCurrentDirectory(), "wishes.json");
        return Results.Text(System.IO.File.ReadAllText(path), "application/json");
    }
}
