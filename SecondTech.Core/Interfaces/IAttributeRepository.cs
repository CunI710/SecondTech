using SecondTech.Core.Models;

namespace SecondTech.Core.Interfaces
    {
    public interface IAttributeRepository
    {
        Task<List<Brand>> GetBrands();
        Task<List<Category>> GetCategories();
        Task<List<Color>> GetColors();
        Task<List<PackageContent>> GetPackageContents();
    }
}