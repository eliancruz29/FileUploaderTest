using System.Collections.Generic;
using Newtonsoft.Json;

namespace file_loader_api.ModelDtos
{
    public class FileTablesDto
    {
        [JsonProperty(PropertyName = "type")]
        public string Type { get; set; }

        [JsonProperty(PropertyName = "files")]
        public IEnumerable<FileLoaderDto> Files { get; set; }

        public FileTablesDto() { }
    }
}
