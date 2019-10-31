using System.ComponentModel.DataAnnotations;
using file_loader_api.ModelDtos;
using Microsoft.Extensions.Options;

namespace file_loader_api.ValidationAttributes
{
    public class MaxSizeAttribute : ValidationAttribute
    {
        public MaxSizeAttribute() { }

        protected override ValidationResult IsValid(
            object value, ValidationContext validationContext)
        {
            var validationData = (IOptions<ValidationDataDto>)validationContext
                                 .GetService(typeof(IOptions<ValidationDataDto>));
            var size = (long)value;

            if (size > validationData.Value.Size)
            {
                return new ValidationResult(GetErrorMessage(validationData.Value.Size));
            }

            return ValidationResult.Success;
        }

        public string GetErrorMessage(long size)
        {
            return $"The file is too big. max value in bytes is: {size}.";
        }
    }
}
