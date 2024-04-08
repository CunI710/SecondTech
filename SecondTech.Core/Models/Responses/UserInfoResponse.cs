using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Responses
{
    public class UserInfoResponse
    {
        public string? Username { get; set; }
        public string? Role { get; set; }
        public DateTime DateTime { get; set; }
    }
}
