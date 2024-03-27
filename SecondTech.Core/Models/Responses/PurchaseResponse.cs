using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Responses
{
    public class PurchaseResponse
    {
        public Guid ProductId { get; set; }
        public string? ProductName { get; set; }
        public int ProductPrice { get; set; }
        public DateTime SoldDateTime { get; set; }

        public string? UserFirstName { get; set; }
        public string? UserLastName { get; set; }
        public string? UserEmail { get; set; }
        public string? UserNumber { get; set; }
        public string? UserCity { get; set; }
        public string? UserAddress { get; set; }

    }
}
