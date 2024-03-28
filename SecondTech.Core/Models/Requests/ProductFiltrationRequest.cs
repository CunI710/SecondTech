using SecondTech.Core.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Requests
{
    public class ProductFiltrationRequest
    {
        public List<string>? Category { get; set; }
        public List<string>? Brand { get; set; }
        public List<string>? Color { get; set; }
        public int? PriceFrom { get; set; }
        public int? PriceTo { get; set; }   
    }
}
