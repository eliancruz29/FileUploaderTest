using System;
using System.Threading.Tasks;
using file_loader_api.ModelDtos;
using file_loader_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace file_loader_api.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly FileContext _context;
        private readonly ILogger _logger;

        public FileController(
            FileContext context,
            ILogger<FileController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // POST: api/file
        [HttpPost]
        public async Task<ActionResult<FileLoaderDto>> PostFileLoader(FileLoaderDto data)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(data);
                }

                var model = new FileLoader
                {
                    Name = data.Name,
                    Size = data.Size,
                    Type = data.Type,
                    Date = data.Date,
                    User = data.User
                };

                _context.FileLoaders.Add(model);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(PostFileLoader), new { id = model.Id }, model);
            }
            catch (Exception ex)
            {
                // save the exception
                _logger.LogError(ex, "PostFileLoader", data);
                return BadRequest(data);
            }
        }
    }
}
