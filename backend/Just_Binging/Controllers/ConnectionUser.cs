using Just_Binging.Data;
using Just_Binging.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;

namespace Just_Binging.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class connectionUser : ControllerBase
    {
        private readonly Just_BingingContext _context;

        public connectionUser(Just_BingingContext context)
        {
            _context = context;
        }

        // POST: api/Users/
        // Check if user exist and if date are good. If yes return id of user if not return 0;
        [HttpPost]
        public int CheckUserLogIn(String name, String password)
        {

            if (name == null || password == null)
            {
                throw new Exception("data not correct");
            }

            // Find User in Database
            var query = from getConnectionUser in _context.User
                        where getConnectionUser.Name == name
                        select new
                        {
                            getPassword = getConnectionUser.Password,
                            getId = getConnectionUser.Id
                        };

            int getUserId = 0;
            foreach (var getConnectionUser in query)
            {
                // Check password Hash
                if (BCrypt.CheckPassword(password, getConnectionUser.getPassword))
                {
                    getUserId = getConnectionUser.getId;
                }
            }

            return getUserId;
        }
    }
}
