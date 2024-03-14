using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;

namespace SecondTech.Core.Interfaces
{
    public interface IUserService
    {
        Task<bool> Delete(Guid id);
        Task<UserInfoResponse> GetInfo(Guid id);
        Task<List<UserInfoResponse>> GetInfoAll();
        Task<UserResponse> Login(UserLoginRequest login);
        Task<string> Register(UserRegisterRequest register);
        Task<bool> Update(UserChangeRequest request);
        Task<UserResponse> Verify(Guid id, string code);
    }
}