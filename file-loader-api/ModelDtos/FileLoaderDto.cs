using System;
using System.ComponentModel.DataAnnotations;
using file_loader_api.ValidationAttributes;
using Newtonsoft.Json;

namespace file_loader_api.ModelDtos
{
    public class FileLoaderDto
    {
        [Required]
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [Required]
        [MaxSize()]
        [JsonProperty(PropertyName = "size")]
        public long Size { get; set; }

        [Required]
        [ValidType()]
        [JsonProperty(PropertyName = "type")]
        public string Type { get; set; }

        [Required]
        [JsonProperty(PropertyName = "date")]
        public DateTime Date { get; set; }

        [Required]
        [JsonProperty(PropertyName = "user")]
        public string User { get; set; }

        public FileLoaderDto() { }
    }
}
