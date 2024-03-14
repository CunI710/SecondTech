using SecondTech.Core.Models;

namespace SecondTech.Core.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Create(User user);
        Task<bool> Delete(Guid id);
        Task<User> Get(Guid id);
        Task<List<User>> GetAll();
        Task<User> GetByEmail(string email);
        Task<bool> Update(User user);
        Task<User> Verify(Guid id, string code);
    }
}