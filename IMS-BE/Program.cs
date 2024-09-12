var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("local_FE_App", policyBuilder =>
    {
        policyBuilder.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

app.UseCors("local_FE_App");

app.MapGet("/", () => "Hello Rehman!");

// POST Endpoint for Login
app.MapPost("/login", async (HttpContext context) =>
{
    var requestBody = await context.Request.ReadFromJsonAsync<LoginRequest>();

    if (requestBody == null)
    {
        return Results.BadRequest("Invalid request data.");
    }

    // Logging for testing
    Console.WriteLine($"Username: {requestBody.Username}, Password: {requestBody.Password}");

    return Results.Ok(new { message = "Login request received", data = requestBody });
});

app.Run();

public class LoginRequest
{
    public string Username { get; set; }
    public string Password { get; set; }
}
