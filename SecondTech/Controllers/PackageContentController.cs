//using Microsoft.AspNetCore.Mvc;
//using SecondTech.Core.Interfaces;
//using SecondTech.Core.Models.Requests;
//using SecondTech.Core.Models.Responses;

//namespace SecondTech.API.Controllers
//{
//    [ApiController]
//    [Route("api/[controller]")]
//    public class PackageContentController : Controller
//    {
//        private IPackageContentService _service;

//        public PackageContentController(IPackageContentService service)
//        {
//            _service = service;
//        }

//        [HttpGet("getall")]
//        public async Task<ActionResult<List<PackageContentResponse>>> GetAll(string? category)
//        {
//            var responses = await _service.GetAll(category);
//            return Ok(responses);
//        }

//        [HttpGet("get")]
//        public async Task<ActionResult<PackageContentResponse>> Get(Guid id)
//        {
//            var response = await _service.Get(id);
//            if (response == null)
//                return NotFound();
//            return Ok(response);
//        }

//        [HttpPost("create")]
//        public async Task<ActionResult<PackageContentResponse>> Create(string content, string categoryName)
//        {

//            PackageContentRequest request = new PackageContentRequest() { Content = content , 
//                                                                          Category = new CategoryRequest() { Name = categoryName } };
//            var response = await _service.Create(request);
//            if (response == null)
//                return BadRequest();
//            return Ok(response);
//        }

//        [HttpDelete("delete")]
//        public async Task<ActionResult> Delete(Guid Id)
//        {
//            if (await _service.Delete(Id))
//                return Ok();
//            return BadRequest();
//        }
//        [HttpPut("update")]
//        public async Task<ActionResult> Update(PackageContentRequest request)
//        {
//            if (await _service.Update(request))
//                return Ok();
//            return BadRequest();
//        }

//    }
//}
