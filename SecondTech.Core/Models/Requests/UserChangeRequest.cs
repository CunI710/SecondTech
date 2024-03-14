using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Requests
{
    public class UserChangeRequest
    {
        public required string UserName { get; set; }
        public required string Password { get; set; }
    }
}
