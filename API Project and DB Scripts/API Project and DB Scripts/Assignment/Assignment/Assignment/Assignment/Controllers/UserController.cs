using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Text;

namespace Assignment.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly string _connectionString;

        public UserController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

 
        [HttpPost("create")]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            if (user == null || string.IsNullOrWhiteSpace(user.Email) || string.IsNullOrWhiteSpace(user.Password))
            {
                return BadRequest("Invalid user data.");
            }

            user.Password = Convert.ToBase64String(Encoding.UTF8.GetBytes(user.Password));

            int newUserId;

            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                // Check if email is already in use
                var checkEmailCmd = new SqlCommand("SELECT COUNT(1) FROM Users WHERE Email = @Email", connection);
                checkEmailCmd.Parameters.AddWithValue("@Email", user.Email);

                var emailExists = (int)await checkEmailCmd.ExecuteScalarAsync() > 0;

                if (emailExists)
                {
                    return BadRequest("Email is already in use.");
                }

                // Insert the new user and get the new UserId
                var insertCmd = new SqlCommand(
                    "INSERT INTO Users (Username, Email, Password) OUTPUT INSERTED.UserId VALUES (@Username, @Email, @Password)",
                    connection);
                insertCmd.Parameters.AddWithValue("@Username", user.Username);
                insertCmd.Parameters.AddWithValue("@Email", user.Email);
                insertCmd.Parameters.AddWithValue("@Password", user.Password);

                newUserId = (int)await insertCmd.ExecuteScalarAsync();
            }

            user.UserId = newUserId;

            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            if (loginRequest == null || string.IsNullOrWhiteSpace(loginRequest.Email) || string.IsNullOrWhiteSpace(loginRequest.Password))
            {
                return BadRequest("Invalid login data.");
            }

            string encodedPassword = Convert.ToBase64String(Encoding.UTF8.GetBytes(loginRequest.Password));

            User user = null;

            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                var loginCmd = new SqlCommand("SELECT UserId, Username, Email FROM Users WHERE Email = @Email AND Password = @Password", connection);
                loginCmd.Parameters.AddWithValue("@Email", loginRequest.Email);
                loginCmd.Parameters.AddWithValue("@Password", encodedPassword);

                using (var reader = await loginCmd.ExecuteReaderAsync())
                {
                    if (await reader.ReadAsync())
                    {
                        user = new User
                        {
                            UserId = reader.GetInt32(0),
                            Username = reader.GetString(1),
                            Email = reader.GetString(2)
                        };
                    }
                }
            }

            if (user == null)
            {
                return Unauthorized("Invalid email or password.");
            }

        
            var token = "Logged in successfull"; // This should be replaced with a proper token

            return Ok(new { Token = token, User = user });
        }


        [HttpPost("submit")]
        public async Task<IActionResult> SubmitAnswers([FromBody] List<QuestionAndAnswerObject> answers)
        {
            if (answers == null || answers.Count == 0)
            {
                return BadRequest("Invalid data.");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var date = DateTime.Now;
                foreach (var answer in answers)
                {
                    var insertCmd = new SqlCommand(
                        "INSERT INTO UserAnswers (UserID, QuestionID, Answer, CreatedAt) VALUES (@UserID, @QuestionID, @Answer, @Date)",
                        connection);
                    insertCmd.Parameters.AddWithValue("@UserID", answer.UserID);
                    insertCmd.Parameters.AddWithValue("@QuestionID", answer.QuestionID);
                    insertCmd.Parameters.AddWithValue("@Answer", answer.Answer);
                    insertCmd.Parameters.AddWithValue("@Date", date);

                    await insertCmd.ExecuteNonQueryAsync();
                }
            }

            return Ok("Answers submitted successfully.");
        }
    }

    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class QuestionAndAnswerObject
    {
        public int UserID { get; set; }
        public int QuestionID { get; set; }
        public string Answer { get; set; }
    }
}
