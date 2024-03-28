using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models
{
    public class ProductFiltration
    {
        public ProductFiltration(ProductFiltrationRequest request)
        {
            Category = request.Category;
            Brand = request.Brand;
            Color = request.Color;
            PriceFrom = request.PriceFrom;
            PriceTo = request.PriceTo;
        }
        public List<string>? Category { get; set; }
        public List<string>? Brand { get; set; }
        public List<string>? Color { get; set; }
        public int? PriceFrom { get; set; }
        public int? PriceTo { get; set; }   

        public List<Product> Filter(List<Product> responses, int page, int pageSize)
        {
            if (Category != null)
                responses = responses.Where(r => Category.Contains(r.Category!.Name!)).ToList();
            if (Brand != null)
                responses = responses.Where(r => Brand.Contains(r.Brand!.Name!)).ToList();
            if (Color != null)
                responses = responses.Where(r => Color.Contains(r.Color!.Name!)).ToList();
            if (PriceFrom != null)
                responses = responses.Where(r => r.Price >= PriceFrom).ToList();
            if (PriceTo != null)
                responses = responses.Where(r => r.Price <= PriceTo).ToList();

            return responses.Skip((page - 1) * pageSize).Take(pageSize).ToList();
        }
    }
}
