using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Responses
{
    public class PackageContentResponse
    {
        public Guid Id { get; set; }
        public string? Content { get; set; }
        public CategoryResponse? Category { get; set; }
    }
}
