using SecondTech.Core.Models.Responses;

namespace SecondTech.Core.Interfaces
{
    public interface IAttributeService
    {
        Task<List<BrandResponse>> GetBrands();
        Task<List<CategoryResponse>> GetCategories();
        Task<List<ColorResponse>> GetColors();
        Task<List<PackageContentResponse>> GetPackageContents();
    }
}