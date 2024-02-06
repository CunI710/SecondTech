using Microsoft.AspNetCore.Mvc;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using SecondTech.DataAccess;

namespace SecondTech.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        private ICategoryService _service;

        public CategoryController(ICategoryService service)
        {
            _service = service;
        }

        [HttpGet("refresh")]
        public IActionResult Get(SecondTechDBContext db) { 
            db.Database.EnsureDeleted();
            db.Database.EnsureCreated();
            return Ok();
        }

        [HttpGet("getall")]
        public async Task<ActionResult<List<CategoryResponse>>> GetAll()
        {
            var responses = await _service.GetAll();
            return Ok(responses);
        }

        [HttpGet("get")]
        public async Task<ActionResult<CategoryResponse>> Get(Guid id)
        {
            var response = await _service.Get(id);
            if(response == null) 
                return NotFound();
            return Ok(response);
        }

        [HttpPost("create")]
        public async Task<ActionResult<CategoryResponse>> Create(CategoryRequest request)
        {
            var response = await _service.Create(request);
            if(response == null)
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
        public async Task<ActionResult> Update(CategoryRequest request)
        {
            if (await _service.Update(request))
                return Ok();
            return BadRequest();
        }


    }
}
