using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;

namespace SecondTech.Core.Interfaces
{
    public interface ICategoryService
    {
        Task<CategoryResponse> Create(CategoryRequest request);
        Task<bool> Delete(Guid Id);
        Task<CategoryResponse> Get(Guid id);
        Task<List<CategoryResponse>> GetAll();
        Task<bool> Update(CategoryRequest request);
    }
}