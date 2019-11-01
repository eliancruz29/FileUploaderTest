using System;
using System.Collections.Generic;
using System.Linq;
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

        // GET: api/file
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<FileTablesDto>))]
        [ProducesResponseType(404)]
        public IActionResult GetFileTables()
        {
            try
            {
                var result = _context.FileLoaders
                .GroupBy(f => f.Type)
                .OrderBy(f => f.Key)
                .Select(f => new FileTablesDto
                {
                    Type = f.Key,
                    Files = f.Select(fs => new FileLoaderDto
                    {
                        Name = fs.Name,
                        Size = fs.Size,
                        Type = fs.Type,
                        Date = fs.Date,
                        User = fs.User
                    })
                })
                .ToList();

                if (result == null)
                    return NotFound();

                return Ok(result);
            }
            catch (Exception ex)
            {
                // save the exception
                _logger.LogError(ex, "GetFileTables", null);
                return NotFound();
            }
        }

        // POST: api/file
        [HttpPost]
        [ProducesResponseType(200, Type = typeof(FileLoaderDto))]
        [ProducesResponseType(400)]
        public async Task<IActionResult> PostFileLoader(FileLoaderDto data)
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
