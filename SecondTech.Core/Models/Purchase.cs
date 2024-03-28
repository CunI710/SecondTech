using SecondTech.Core.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models
{
    public class Purchase
    {
        public Purchase() { }
        public Purchase(PurchaseRequest request, Product product)
        {
            ProductId = product.Id;
            ProductName = product.Name;
            ProductPrice = product.Price;
            ImgUrls = product.ImgUrls;
            SoldDateTime = DateTime.Now;
            
            UserFirstName = request.FirstName;
            UserLastName = request.LastName;
            UserEmail = request.Email;
            UserNumber = request.Number;
            UserCity = request.City;
            UserAddress = request.Address;
        }
        public Purchase(PurchaseRequestList request, Product product)
        {
            ProductId = product.Id;
            ProductName = product.Name;
            ProductPrice = product.Price;
            ImgUrls = product.ImgUrls;
            SoldDateTime = DateTime.Now;
            
            UserFirstName = request.FirstName;
            UserLastName = request.LastName;
            UserEmail = request.Email;
            UserNumber = request.Number;
            UserCity = request.City;
            UserAddress = request.Address;
        }
        public Guid ProductId { get; set; }
        public string? ProductName { get; set; }
        public int ProductPrice { get; set; }
        public List<ImgUrl>? ImgUrls { get; set; }
        public DateTime SoldDateTime { get; set; }

        public string? UserFirstName { get; set; }
        public string? UserLastName { get; set; }
        public string? UserEmail { get; set; }
        public string? UserNumber { get; set; }
        public string? UserCity { get; set; }
        public string? UserAddress { get; set; }

    }
}
