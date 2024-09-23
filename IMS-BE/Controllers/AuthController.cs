using IMS_BE.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; // Make sure to include this for EF methods
using System.Linq; // For LINQ queries

namespace IMS_BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AuthController : ControllerBase
    {
        private readonly AuthContext _context;

        public AuthController(AuthContext context)
        {
            _context = context;
        }


        [HttpPost]
        public IActionResult Post([FromBody] LoginData loginData)
        {
            Console.WriteLine("login post request handler was called!");
            Console.WriteLine(loginData.Username);
            Console.WriteLine(loginData.Password);

            // Validate user credentials
            var user = _context.Users
                .FirstOrDefault(u => u.UserName == loginData.Username && u.Password == loginData.Password);

            if (user == null)
            {
                return Unauthorized(new { Message = "Invalid username or password" });
            }

            // Successful login, return user information
            return Ok(new
            {
                Message = "Login successful",
                User = new
                {
                    user.UserId,
                    user.UserName,
                    user.Email,
                    user.Role,
                    user.ProfilePicPath
                }
            });
        }


        public class LoginData
        {
            public required string Username { get; set; }
            public required string Password { get; set; }
        }
    }
}