using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Requests
{
    public class PurchaseRequestList
    {
        //http://localhost:5183/api/Product/confirmSale?productId=4528750c-f939-4f2c-909d-439aed99b876&email=string&firstName=string&lastName=string&city=string&address=string&number=string
        public required List<Guid> ProductId { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string Number { get; set; }
        public required string City { get; set; }
        public required string Address { get; set; }

        public bool ValidateEmail()
        {
            var pattern = @"\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*";
            if (Regex.Match(Email, pattern).Success)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
