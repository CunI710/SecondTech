using Microsoft.AspNetCore.Mvc;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models.Responses;

namespace SecondTech.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttributeController : ControllerBase
    {
        private IAttributeService _service;
        private readonly ILogger logger;

        public AttributeController(IAttributeService service, ILogger<AttributeController> logger)
        {
            _service = service;
            this.logger = logger;
        }

        [HttpGet("brands")]
        public async Task<ActionResult<List<BrandResponse>>> Brands()
        {
            var responses = await _service.GetBrands();
            return Ok(responses);
        }   

        [HttpGet("categories")]
        public async Task<ActionResult<List<CategoryResponse>>> Categories()
        {
            var responses = await _service.GetCategories();
            return Ok(responses);
        }

        [HttpGet("color")]
        public async Task<ActionResult<List<ColorResponse>>> Colors()
        {
            var responses = await _service.GetColors();
            return Ok(responses);
        }

        [HttpGet("packageContent")]
        public async Task<ActionResult<List<PackageContentResponse>>> PackageContents()
        {
            var responses = await _service.GetPackageContents();
            return Ok(responses);
        }
    }
}
