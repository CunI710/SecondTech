using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using SecondTech.Application.Services;
using SecondTech.Core.Helpers;
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
        private readonly ILogger logger;
        private readonly IMessageSenderService sender;

        public ProductController(IProductService service, ILogger<ProductController> logger, IMessageSenderService sender)
        {
            _service = service;
            this.logger = logger;
            this.sender = sender;
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
            if (request.ImgUrls.IsNullOrEmpty() && !request.Imgs.IsNullOrEmpty())
            {
                request.ImgUrls = await ImgHelper.ImgSendRange(request.Imgs!);
            }
            else if (request.ImgUrls.IsNullOrEmpty() && request.Imgs.IsNullOrEmpty())
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
            if (!request.Imgs.IsNullOrEmpty())
            {
                request.ImgUrls?.AddRange(await ImgHelper.ImgSendRange(request.Imgs!));
            }
            if (await _service.Update(request))
                return Ok();
            return BadRequest();
        }

        [HttpPost("requestSale")]
        public async Task<ActionResult> RequestSale(PurchaseRequest request)
        {
            await _service.RequestSale(request);
            return Ok();
        }
        [Authorize(Roles = "Admin")]
        [HttpGet("confirmSale")]
        public async Task<ActionResult> ConfirmSale([FromHeader]PurchaseRequest request)
        {
            ProductResponse product = await _service.Get(request.ProductId);
            if (product != null)
            {
                await _service.ConfirmSale(request);
                await sender.SendConfirmMessage(product.Name!, "Спасибо за Покупку", request.Email);
                return Ok();
            }
            return BadRequest();
        }
        [Authorize(Roles = "Admin")]
        [HttpGet("purchases")]
        public async Task<ActionResult<List<PurchaseResponse>>> Purchases()
        {

            var responses = await _service.Purchases();
            return Ok(responses);
        }
    }
}