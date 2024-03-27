using Microsoft.Extensions.Options;
using MimeKit;
using MailKit.Net.Smtp;
using SecondTech.Core.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SecondTech.Core.Interfaces;

namespace SecondTech.Infrastructure
{
    public class EmailSenderProvider : IMessageSenderProvider
    {

        private EmailSendSettings _settings;

        public EmailSenderProvider(IOptions<EmailSendSettings> settings)
        {
            _settings = settings.Value;
        }
        public async Task SendMessage(string toEmail, string message, string subject)
        {

            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_settings.Email);
            email.To.Add(MailboxAddress.Parse(toEmail));
            email.Subject = subject;
            var builder = new BodyBuilder();
            builder.HtmlBody = message;
            email.Body = builder.ToMessageBody();

            using (var client = new SmtpClient())   
            {
                client.Connect(_settings.Host, _settings.Port, false);
                client.Authenticate(_settings.Email, _settings.Password);
                await client.SendAsync(email);

                await client.DisconnectAsync(true);
            }


        }
    }
}
