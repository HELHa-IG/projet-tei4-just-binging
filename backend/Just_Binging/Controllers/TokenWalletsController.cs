using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Just_Binging.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Just_Binging.Data;
using NuGet.Protocol.Plugins;

namespace Just_Binging.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenWalletsController : ControllerBase
    {
        private readonly Just_BingingContext _context;

        public TokenWalletsController(Just_BingingContext context)
        {
            _context = context;
        }

        // GET: api/TokenWallets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TokenWallet>>> GetTokenWallet(string name, string password)
        {
            // Find User in Database
            User user = _context.User.FirstOrDefault(User => User.Mail == name);

                // Check password Hash
                if (user != null && BCrypt.CheckPassword(password, user.Password))
                {

                        string Token = Convert.ToBase64String(Guid.NewGuid().ToByteArray());
                        TokenWallet tw = new TokenWallet();
                        tw.Token = Token;
                        tw.User = user;
                        _context.TokenWallet.Add(tw);
                        _context.SaveChanges();
                        return await Task.FromResult(Ok(_context.TokenWallet.FirstOrDefault(T => T.TokenWalletId == tw.TokenWalletId)));

                }   

            return await Task.FromResult(Unauthorized());
        }

        // GET: api/TokenWallets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TokenWallet>> GetTokenWallet(int id)
        {
            var tokenWallet = await _context.TokenWallet.FindAsync(id);

            if (tokenWallet == null)
            {
                return NotFound();
            }

            return tokenWallet;
        }

        // PUT: api/TokenWallets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTokenWallet(int id, TokenWallet tokenWallet)
        {
            if (id != tokenWallet.TokenWalletId)
            {
                return BadRequest();
            }

            _context.Entry(tokenWallet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TokenWalletExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TokenWallets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TokenWallet>> PostTokenWallet(TokenWallet tokenWallet)
        {
            _context.TokenWallet.Add(tokenWallet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTokenWallet", new { id = tokenWallet.TokenWalletId }, tokenWallet);
        }

        // DELETE: api/TokenWallets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTokenWallet(int id)
        {
            var tokenWallet = await _context.TokenWallet.FindAsync(id);
            if (tokenWallet == null)
            {
                return NotFound();
            }

            _context.TokenWallet.Remove(tokenWallet);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TokenWalletExists(int id)
        {
            return _context.TokenWallet.Any(e => e.TokenWalletId == id);
        }
    }
}
