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
        public required string Role { get; set; }
    }
}
