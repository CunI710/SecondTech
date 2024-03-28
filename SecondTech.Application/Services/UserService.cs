using AutoMapper;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using SecondTech.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SecondTech.Core.Helpers;
using SecondTech.Core.Interfaces.Auth;
using Newtonsoft.Json.Linq;

namespace SecondTech.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IJwtProvider _provider;
        private readonly IMapper _mapper;
        private readonly IUserRepository _repos;

        public UserService(IUserRepository repos, IMapper mapper, IJwtProvider provider)
        {
            _provider = provider;
            _mapper = mapper;
            _repos = repos;
        }

        public async Task<List<UserInfoResponse>> GetInfoAll()
        {
            var users = await _repos.GetAll();

            var responses = users.Select(c => _mapper.Map<UserInfoResponse>(c)).ToList();
            return responses;
        }

        public async Task<UserInfoResponse> GetInfo(Guid id)
        {
            var user = await _repos.Get(id);
            if(user == null)
            {
                return null!;
            }
            var response = _mapper.Map<UserInfoResponse>(user);
            return response;
        }

        public async Task<UserResponse> Register(UserRegisterRequest register)
        {
            User registerUser = _mapper.Map<User>(register);
            registerUser.PasswordHash = HashHelper.Generate(register.Password);
            registerUser.Role = "User";
            User user = await _repos.Create(_mapper.Map<User>(registerUser));
            if (user == null) return null;

            var token = _provider.GenerateToken(user);
            UserResponse response = new UserResponse() { UserInfo = _mapper.Map<UserInfoResponse>(user), JWT = token };

            return response;

        }

        public async Task<UserResponse> Login(UserLoginRequest login)
        {
            User user = await _repos.GetByUserName(login.UserName);
            if (user == null || !HashHelper.HashVerify(user.PasswordHash!, login.Password))
                return null!;

            var token = _provider.GenerateToken(user);
            UserResponse response = new UserResponse() { UserInfo = _mapper.Map<UserInfoResponse>(user), JWT = token };

            return response;
        }

        public async Task<bool> Update(UserChangeRequest request)
        {
            User user = _mapper.Map<User>(request);
            user.Id = Guid.NewGuid();
            user.PasswordHash = HashHelper.Generate(request.Password);

            return await _repos.Update(user);
        }


        public async Task<bool> Delete(Guid id)
        {
            return await _repos.Delete(id);
        }
    }
}
