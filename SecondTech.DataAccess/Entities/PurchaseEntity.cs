using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace SecondTech.DataAccess.Entities
{
    public class PurchaseEntity
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public required string ProductName { get; set; }
        public int ProductPrice { get; set; }
        public required string UserFirstName { get; set; }
        public required string UserLastName { get; set; }
        public required string UserEmail { get; set; }
        public required string UserPhone { get; set; }
        public required string UserCity { get; set;}
        public required string UserAddress { get; set;}
        public DateTime SoldDateTime { get; set;}

    }
}
