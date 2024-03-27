using Microsoft.AspNetCore.Http;
using SecondTech.Core.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Requests
{
    public class ProductRequest
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required int Price { get; set; }
        public required CategoryRequest Category { get; set; }
        public required string Description { get; set; }
        public required string State { get; set; }
        public List<IFormFile>? Imgs { get; set; }
        public List<ImgUrl>? ImgUrls { get; set; }
        public required ColorRequest Color { get; set; }
        public required BrandRequest Brand { get; set; }
        public required string Storage { get; set; }
        public required string Ram { get; set; }
        public required string Model { get; set; }
        public required string Processor { get; set; }
        public required string Battery { get; set; }
        public List<CharacteristicRequest>? Characteristics { get; set; }
        public List<PackageContentRequest>? PackageContents { get; set; }
    }
}
