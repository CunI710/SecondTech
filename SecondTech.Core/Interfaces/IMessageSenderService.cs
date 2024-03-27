using SecondTech.Core.Models;

namespace SecondTech.Core.Interfaces
{
    public interface IMessageSenderService
    {
        public Task SendMessage(string message, string subject, string email);
        public Task SendConfirmMessage(string produtName, string subject, string email);
        public Task SendPurchaseMessage(Purchase purchase, string subject, string email);
    }
}