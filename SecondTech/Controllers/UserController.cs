using Azure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using System.IdentityModel.Tokens.Jwt;

namespace SecondTech.API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpPost("register")]
        public async Task<ActionResult<string>> Register(UserRegisterRequest request)
        {
            var response = await _service.Register(request);
            if (response == null)
            {
                return BadRequest("Не получилось зарегистрироваться");
            }

            HttpContext.Response.Cookies.Append("test-some-cookie", response.JWT!);
            return Ok(response.UserInfo);
        }

        [Authorize(Roles = "Admin, User")]
        [HttpGet("getInfo")]
        public async Task<ActionResult<UserInfoResponse>> GetInfo()
        {
            string jwt = HttpContext.Request.Cookies["test-some-cookie"]!.Replace("Bearer ", "");
            var jsonToken = new JwtSecurityTokenHandler().ReadToken(jwt) as JwtSecurityToken;
            string id = jsonToken!.Payload["userId"].ToString()!;

            var response = await _service.GetInfo(Guid.Parse(id!));
            if (response == null)
                return NotFound();
            return Ok(response);
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserInfoResponse>> Login(UserLoginRequest request)
        {
            var response = await _service.Login(request);
            if (response == null)
                return BadRequest();
            HttpContext.Response.Cookies.Append("test-some-cookie", response.JWT!);
            return Ok(response.UserInfo);
        }

        [Authorize(Roles = "Admin, User")]
        [HttpPost("delete")]
        public async Task<ActionResult> Delete(Guid id)
        {
            if (await _service.Delete(id))
                return Ok();
            return BadRequest();
        }
    }
}
