using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.DataAccess.Entities
{
    public class ColorEntity
    {
        public Guid Id { get; set; }
        public required string? Name { get; set; }
        public List<ProductEntity>? Products { get; set; }
    }
}
