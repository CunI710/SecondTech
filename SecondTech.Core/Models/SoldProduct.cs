using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models
{
    public class SoldProduct
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public int Price { get; set; }
        public required Category Category { get; set; }
        public required string Description { get; set; }
        public required string State { get; set; }
        public required string ImgUrl { get; set; }
        public required Color Color { get; set; }
        public required Brand Brand { get; set; }
        public required string Storage { get; set; }
        public required string Ram { get; set; }
        public required string Model { get; set; }
        public required string Processor { get; set; }
        public required string Battery { get; set; }
        public required DateTime DateTime { get; set; }
        public required DateTime SaleTime { get; set; }
        public List<Characteristic>? Characteristics { get; set; }
        public List<PackageContent>? PackageContents { get; set; }
        public required User User { get; set; }
    }
}
