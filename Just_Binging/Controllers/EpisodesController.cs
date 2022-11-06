using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Just_Binging.Data;
using Just_Binging.Models;
using SecureAPIExemple.Services;
using NuGet.Common;

namespace Just_Binging.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EpisodesController : ControllerBase
    {
        private readonly Just_BingingContext _context;

        public EpisodesController(Just_BingingContext context)
        {
            _context = context;
        }

        // GET: api/Episodes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Episode>>> GetEpisode([FromHeader(Name = "x-auth-token")] string token)
        {
            if (TokenService.IsTokenValid(token, _context.TokenWallet))
            {
                return await _context.Episode.ToListAsync();
            }
            else
            {
                return Unauthorized();
            }
        }

        // GET: api/Episodes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Episode>> GetEpisode(int id, [FromHeader(Name = "x-auth-token")] string token)
        {
            if (TokenService.IsTokenValid(token, _context.TokenWallet))
            {
                var episode = await _context.Episode.FindAsync(id);

                if (episode == null)
                {
                    return NotFound();
                }

                return episode;
            }
            else
            {
                return Unauthorized();
            }
        }

        // PUT: api/Episodes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEpisode(int id, Episode episode, [FromHeader(Name = "x-auth-token")] string token)
        {
            if (TokenService.IsTokenValid(token, _context.TokenWallet))
            {
                if (id != episode.Id)
                {
                    return BadRequest();
                }

                _context.Entry(episode).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EpisodeExists(id))
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
            else
            {
                return Unauthorized();
            }
        }

        // POST: api/Episodes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Episode>> PostEpisode(Episode episode, [FromHeader(Name = "x-auth-token")] string token)
        {
            if (TokenService.IsTokenValid(token, _context.TokenWallet))
            {
                _context.Episode.Add(episode);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetEpisode", new { id = episode.Id }, episode);
            }
            else
            {
                return Unauthorized();
            }

        }

        // DELETE: api/Episodes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEpisode(int id, [FromHeader(Name = "x-auth-token")] string token)
        {
            if (TokenService.IsTokenValid(token, _context.TokenWallet))
            {
                var episode = await _context.Episode.FindAsync(id);
                if (episode == null)
                {
                    return NotFound();
                }

                _context.Episode.Remove(episode);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            else
            {
                return Unauthorized();
            }
        }

        private bool EpisodeExists(int id)
        {
            return _context.Episode.Any(e => e.Id == id);
        }
    }
}
