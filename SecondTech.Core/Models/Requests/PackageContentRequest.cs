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
        public required string Content { get; set; }
    }
}
