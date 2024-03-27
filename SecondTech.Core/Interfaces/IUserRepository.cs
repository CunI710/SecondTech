using SecondTech.Core.Models;

namespace SecondTech.Core.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Create(User user);
        Task<bool> Delete(Guid id);
        Task<User> Get(Guid id);
        Task<List<User>> GetAll();
        Task<User> GetByUserName(string userName);
        Task<bool> Update(User user);
    }
}