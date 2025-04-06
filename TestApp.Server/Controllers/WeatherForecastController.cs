using Microsoft.AspNetCore.Mvc;

using System.IO;

namespace TestApp.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IResult Get()
    {

        var path = Path.Combine(Directory.GetCurrentDirectory(), "wishes.json");
        return Results.Text(System.IO.File.ReadAllText(path), "application/json");
    }
}
