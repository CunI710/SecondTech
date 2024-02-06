using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public int Price { get; set; }
        public Category? Category { get; set; }
        public string? Description { get; set; }
        public int Likes { get; set; }
        public string? ImgUrl { get; set; }
        public string? Color { get; set; }
        public string? Brand { get; set; }
        public string? Storage { get; set; }
        public string? Ram { get; set; }
        public string? Model { get; set; }
        public string? Processor { get; set; }
        public string? Battery { get; set; }
        public DateTime DateTime { get; set; }
        public List<Characteristic>? Characteristics { get; set; }
        public List<PackageContent>? PackageContents { get; set; }
    }
}
