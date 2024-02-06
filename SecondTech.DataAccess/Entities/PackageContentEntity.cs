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
        public string? Content { get; set; }
        public CategoryEntity? Category { get; set; }
    }
}
