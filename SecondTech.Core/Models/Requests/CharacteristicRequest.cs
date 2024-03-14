using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Requests
{
    public class CharacteristicRequest
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Value { get; set; }
    }
}
