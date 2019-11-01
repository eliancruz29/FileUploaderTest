using file_loader_api.ModelDtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace file_loader_api.Controllers
{
    [Route("api/validation-data")]
    [ApiController]
    public class ValidationDataController : ControllerBase
    {
        private readonly ValidationDataDto _validationDataSettings;

        public ValidationDataController(IOptions<ValidationDataDto> validationDataSettings)
        {
            _validationDataSettings = validationDataSettings.Value;
        }

        // GET api/validation-data
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(ValidationDataDto))]
        public IActionResult Get()
        {
            return Ok(_validationDataSettings);
        }
    }
}
