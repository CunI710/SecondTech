using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.DataAccess.Entities
{
    public class PackageContentEntity
    {
        public Guid Id { get; set; }
        public required string Content { get; set; }
        public required CategoryEntity Category { get; set; }
        public List<ProductEntity>? Products { get; set; }
    }
}
