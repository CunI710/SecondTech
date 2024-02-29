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
        public string? Name { get; set; }
        public int Price { get; set; }
        public CategoryRequest? Category { get; set; }
        public string? Description { get; set; }
        public string? State { get; set; }
        public IFormFile? Img { get; set; }
        public string? ImgUrl { get; set; }
        public ColorRequest? Color { get; set; }
        public BrandRequest? Brand { get; set; }
        public string? Storage { get; set; }
        public string? Ram { get; set; }
        public string? Model { get; set; }
        public string? Processor { get; set; }
        public string? Battery { get; set; }
        public List<CharacteristicRequest>? Characteristics { get; set; }
        public List<PackageContentRequest>? PackageContents { get; set; }
    }
}
