using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.DataAccess.Entities
{
    public class ProductEntity
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public int Price { get; set; }
        public required CategoryEntity Category { get; set; }
        public required string Description { get; set; }
        public int Likes { get; set; }
        public required string State { get; set; }
        public required string ImgUrl { get; set; }
        public required ColorEntity Color { get; set; }
        public required BrandEntity Brand { get; set; }
        public required string Storage { get; set; }
        public required string Ram { get; set; }
        public required string Model { get; set; }
        public required string Processor { get; set; }
        public required string Battery { get; set; }
        public required DateTime DateTime { get; set; }
        public List<CharacteristicEntity>? Characteristics { get; set; }
        public List<PackageContentEntity>? PackageContents { get; set; }
    }
}