using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string? Password { get; set; }
        public string? PasswordHash { get; set; }
        public string? Role { get; set; }
    }
}
