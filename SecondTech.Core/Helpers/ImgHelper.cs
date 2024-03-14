using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using SecondTech.Core.Models.Responses;

namespace SecondTech.Core.Helpers
{
    public class ImgHelper
    {
        const string ClientId = "964450af4d8617c";
        const string UploadUrl = "https://api.imgur.com/3/image";
        public static async Task<string> ImgSend(IFormFile img)
        {

            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("Authorization", $"Client-ID {ClientId}");

                var imageMemoryStream = new MemoryStream(); 
                await img!.CopyToAsync(imageMemoryStream);
                imageMemoryStream.Seek(0, SeekOrigin.Begin);

                var imageContent = new StreamContent(imageMemoryStream);
                imageContent.Headers.Add("Content-Type", "application/octet-stream");

                var imgResponse = await httpClient.PostAsync(UploadUrl, imageContent);
                imgResponse.EnsureSuccessStatusCode();

                var responseContent = await imgResponse.Content.ReadAsStringAsync();

                var imageResponse = JsonConvert.DeserializeObject<ImgResponse>(responseContent);
                return imageResponse!.Data!.Link!;
            }
        }
    }
}
