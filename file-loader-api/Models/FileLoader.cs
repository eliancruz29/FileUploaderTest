using System;

namespace file_loader_api.Models
{
    public class FileLoader
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public long Size { get; set; }
        public string Type { get; set; }
        public DateTime Date { get; set; }
        public string User { get; set; }

        public FileLoader() { }
    }
}
