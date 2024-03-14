using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SecondTech.API.Helpers;
using SecondTech.Application.Services;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;

namespace SecondTech.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {

        private IProductService _service;

        public ProductController(IProductService service)
        {
            _service = service;
        }

        [HttpPost("getall")]
        public async Task<ActionResult<List<ProductResponse>>> GetAll(ProductSearchRequest? request)
        {
            var responses = await _service.GetAll();
            if (request != null)
            {
                return Ok(request.Validate(responses));
            }
            return Ok(responses);
        }

        [HttpGet("get")]
        public async Task<ActionResult<ProductResponse>> Get(Guid id)
        {
            var response = await _service.Get(id);
            if (response == null)
                return NotFound();
            return Ok(response);
        }

        [HttpPost("create")]
        public async Task<ActionResult<ProductResponse>> Create(ProductRequest request)
        {
            if (request.ImgUrl == null && request.Img != null)
            {
                request.ImgUrl = await ImgHelper.ImgSend(request.Img!);
            }
            else if (request.ImgUrl == null && request.Img == null)
            {
                return BadRequest(new { message = "Вы не отправили фото" });
            }
            var response = await _service.Create(request);

            if (response == null)
                return BadRequest();
            return Ok(response);
        }

        [HttpDelete("delete")]
        public async Task<ActionResult> Delete(Guid Id)
        {
            if (await _service.Delete(Id))
                return Ok();
            return BadRequest();
        }
        [HttpPut("update")]
        public async Task<ActionResult> Update(ProductRequest request)
        {
            if (request.ImgUrl == null && request.Img != null)
            {
                request.ImgUrl = await ImgHelper.ImgSend(request.Img!);
            }
            else if (request.ImgUrl == null && request.Img == null)
            {
                return BadRequest(new { message = "Вы не отправили фото" });
            }
            if (await _service.Update(request))
                return Ok();
            return BadRequest();
        }
        /*
         
            Product product = _mapper.Map<Product>(request);


            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("Authorization", $"Client-ID {ClientId}");

                var imageMemoryStream = new MemoryStream();
                await request.Img!.CopyToAsync(imageMemoryStream);
                imageMemoryStream.Seek(0, SeekOrigin.Begin);

                var imageContent = new StreamContent(imageMemoryStream);
                imageContent.Headers.Add("Content-Type", "application/octet-stream");

                var response = await httpClient.PostAsync(UploadUrl, imageContent);
                response.EnsureSuccessStatusCode();

                var responseContent = await response.Content.ReadAsStringAsync();

                var imageResponse = JsonConvert.DeserializeObject<ImgResponse>(responseContent);
                product.ImgUrl = imageResponse!.Data!.Link;
            }
         */
    }
}
