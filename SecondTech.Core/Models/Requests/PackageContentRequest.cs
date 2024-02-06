using SecondTech.Core.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Requests
{
    public class PackageContentRequest
    {
        public Guid Id { get; set; }
        public string? Content { get; set; }
        public CategoryRequest? Category { get; set; }
    }
}
