using Microsoft.Extensions.Options;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Application.Services
{
    public class EmailSenderService : IMessageSenderService
    {
        private IMessageSenderProvider provider;

        public EmailSenderService(IMessageSenderProvider provider)
        {
            this.provider = provider;
        }
        public async Task SendMessage(string email, string message, string subject)
        {
            await provider.SendMessage(email, message, subject);
        }
        public async Task SendConfirmMessage(string produtName, string subject, string email)
        {
            string message = $"Спасибо за покупку. <br>В ближайшие дни к вам приедет {produtName}";

            await SendMessage(email, message, subject);
        }
        public async Task SendPurchaseMessage(Purchase purchase, string email, string subject)
        {
            List<string> imgs = purchase.ImgUrls!.Select(i=>$"<img src=\"{i.Url}\"/>").ToList();
            string message = $"{string.Concat(imgs)}<br>" +
                             $"ProductId: {purchase.ProductId}<br>" +
                             $"Name: {purchase.ProductName}<br>" +
                             $"Price: {purchase.ProductPrice}<br>" +
                             $"UserFirst: {purchase.UserFirstName} <br>" +
                             $"UserLastName: {purchase.UserLastName} <br>" +
                             $"UserEmail: {purchase.UserEmail}<br>" +
                             $"UserNumber: {purchase.UserNumber}<br>" +
                             $"UserCity: {purchase.UserCity}<br>" +
                             $"UserAddress: {purchase.UserAddress}<br>" +
                             $"<br><br>Чтобы одобрить попупку, перейдите по этой ссылке:<br>" +
                             $"<a href=\"http://localhost:5183/api/Product/confirmSale?productId={purchase.ProductId}" +
                             $"&email={purchase.UserEmail}&firstName={purchase.UserFirstName}&lastName={purchase.UserLastName}" +
                             $"&city={purchase.UserCity}&address={purchase.UserAddress}&number={purchase.UserNumber}\"><button>Одобрить</button></a>\n";

            await SendMessage(email, message, subject);

        }
    }
}
