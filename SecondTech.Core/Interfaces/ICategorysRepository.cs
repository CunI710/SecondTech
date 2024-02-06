using SecondTech.Core.Models;

namespace SecondTech.Core.Interfaces
{
    public interface ICategorysRepository
    {
        Task<Category> Create(Category category);
        Task<bool> Delete(Guid Id);
        Task<Category> Get(Guid id);
        Task<List<Category>> GetAll();
        Task<bool> Update(Category category);
    }
}