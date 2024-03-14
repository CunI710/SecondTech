using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Requests
{ 
    public class CategoryRequest
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
    }
}
