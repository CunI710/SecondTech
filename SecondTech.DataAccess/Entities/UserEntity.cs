using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.DataAccess.Entities
{
    public class UserEntity
    {
        public Guid Id { get; set; }
        public required string UserName { get; set; }
        public required string PasswordHash { get; set; }
        public required string Email { get; set; }
        public required string Number { get; set; }
        public required string City { get; set; }
        public required string Address { get; set; }
        public required string Role { get; set; }
        public DateTime DateTime { get; set; }
        public string? Code { get; set; }
        public bool Verified { get; set; }
        public List<SoldProductEntity>? SoldProducts { get; set; }

    }
}
