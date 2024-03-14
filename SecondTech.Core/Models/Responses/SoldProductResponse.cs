using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Responses
{
    public class SoldProductResponse
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public int Price { get; set; }
        public required CategoryResponse Category { get; set; }
        public required string Description { get; set; }
        public required string State { get; set; }
        public required string ImgUrl { get; set; }
        public required ColorResponse Color { get; set; }
        public required BrandResponse Brand { get; set; }
        public required string Storage { get; set; }
        public required string Ram { get; set; }
        public required string Model { get; set; }
        public required string Processor { get; set; }
        public required string Battery { get; set; }
        public required DateTime DateTime { get; set; }
        public required DateTime SaleTime { get; set; }
        public List<CharacteristicResponse>? Characteristics { get; set; }
        public List<PackageContentResponse>? PackageContents { get; set; }
        public required UserInfoResponse User { get; set; }
    }
}

