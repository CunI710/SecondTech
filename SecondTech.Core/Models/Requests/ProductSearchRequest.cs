using SecondTech.Core.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Requests
{
    public class ProductSearchRequest
    {
        public string? Category { get; set; }
        public string? Brand { get; set; }
        public string? Color { get; set; }
        public int? PriceFrom { get; set; }
        public int? PriceTo { get; set; }
        public List<ProductResponse> Validate (List<ProductResponse> responses)
        {

            if (Category != null)
                responses = responses.Where(r => r.Category!.Name == Category).ToList();
            if (Brand != null)
                responses = responses.Where(r => r.Brand!.Name == Brand).ToList();
            if (Color != null)
                responses = responses.Where(r => r.Color!.Name == Color).ToList();
            if (PriceFrom != null)
                responses = responses.Where(r => r.Price >= PriceFrom).ToList();
            if (PriceTo != null)
                responses = responses.Where(r => r.Price <= PriceTo).ToList();
            
            return responses;
        }
    }
}
