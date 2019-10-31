using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace file_loader_api.Models
{
    public class ValidationData
    {
        [JsonProperty(PropertyName = "size")]
        public long Size { get; set; }

        [JsonIgnore]
        public string Types { get; set; }

        [JsonProperty(PropertyName = "types")]
        public IEnumerable<string> TypeList
        {
            get
            {
                return Types.Split(";").Select(s => s.Trim());
            }
        }
    }
}
