using System.ComponentModel.DataAnnotations;
using System.Linq;
using file_loader_api.ModelDtos;
using Microsoft.Extensions.Options;

namespace file_loader_api.ValidationAttributes
{
    public class ValidTypeAttribute : ValidationAttribute
    {
        public ValidTypeAttribute() { }

        protected override ValidationResult IsValid(
            object value, ValidationContext validationContext)
        {
            var validationData = (IOptions<ValidationDataDto>)validationContext
                                 .GetService(typeof(IOptions<ValidationDataDto>));
            var type = (string)value;

            if (!validationData.Value.TypeList.Contains(type))
            {
                return new ValidationResult(GetErrorMessage());
            }

            return ValidationResult.Success;
        }

        public string GetErrorMessage()
        {
            return "The file type is unacceptable.";
        }
    }
}
