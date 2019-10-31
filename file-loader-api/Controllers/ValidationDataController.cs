using file_loader_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace file_loader_api.Controllers
{
    [Route("api/validation-data")]
    [ApiController]
    public class ValidationDataController : ControllerBase
    {
        private readonly ValidationData _validationDataSettings;

        public ValidationDataController(IOptions<ValidationData> validationDataSettings)
        {
            _validationDataSettings = validationDataSettings.Value;
        }

        // GET api/validation-data
        [HttpGet]
        public ActionResult<ValidationData> Get()
        {
            return _validationDataSettings;
        }
    }
}
