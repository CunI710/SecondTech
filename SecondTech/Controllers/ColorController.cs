//using Microsoft.AspNetCore.Mvc;
//using SecondTech.Core.Interfaces;
//using SecondTech.Core.Models.Requests;
//using SecondTech.Core.Models.Responses;
//using SecondTech.DataAccess;

//namespace SecondTech.API.Controllers
//{
//    [ApiController]
//    [Route("api/[controller]")]
//    public class ColorController : ControllerBase
//    {

//        private IColorService _service;

//        public ColorController(IColorService service)
//        {
//            _service = service;
//        }

//        [HttpGet("getall")]
//        public async Task<ActionResult<List<ColorResponse>>> GetAll()
//        {
//            var responses = await _service.GetAll();
//            return Ok(responses);
//        }

//        [HttpGet("get")]
//        public async Task<ActionResult<ColorResponse>> Get(Guid id)
//        {
//            var response = await _service.Get(id);
//            if (response == null)
//                return NotFound();
//            return Ok(response);
//        }

//        [HttpPost("create")]
//        public async Task<ActionResult<ColorResponse>> Create(string name)
//        {
    
//            ColorRequest request = new ColorRequest() { Name = name };
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
//        public async Task<ActionResult> Update(ColorRequest request)
//        {
//            if (await _service.Update(request))
//                return Ok();
//            return BadRequest();
//        }
//    }
//}
