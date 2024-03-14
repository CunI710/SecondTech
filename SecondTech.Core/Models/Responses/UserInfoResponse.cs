using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Responses
{
    public class UserInfoResponse
    {
        public required string UserName { get; set; }
        public required string Email { get; set; }
        public required string Number { get; set; }
        public required string City { get; set; }
        public required string Address { get; set; }
        public DateTime DateTime { get; set; }
    }
}
