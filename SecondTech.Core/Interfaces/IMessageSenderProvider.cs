
namespace SecondTech.Core.Interfaces
{
    public interface IMessageSenderProvider
    {
        Task SendMessage(string toEmail, string message, string subject);
    }
}