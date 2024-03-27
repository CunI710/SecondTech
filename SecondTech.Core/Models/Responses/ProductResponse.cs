using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Responses
{
    public class ProductResponse
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public int Price { get; set; }
        public CategoryResponse? Category { get; set; }
        public string? Description { get; set; }
        public string? State { get; set; }
        public List<ImgUrl>? ImgUrls { get; set; }
        public ColorResponse? Color { get; set; }
        public BrandResponse? Brand { get; set; }
        public string? Storage { get; set; }
        public string? Ram { get; set; }
        public string? Model { get; set; }
        public string? Processor { get; set; }
        public string? Battery { get; set; }
        public DateTime DateTime { get; set; }
        public List<CharacteristicResponse>? Characteristics { get; set; }
        public List<PackageContentResponse>? PackageContents { get; set; }
    }
}
