using AutoMapper;
using SecondTech.Core.Models;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using SecondTech.DataAccess.Entities;

namespace SecondTech.API.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile() {

            CreateMap<Category, CategoryEntity>();
            CreateMap<CategoryEntity, Category>();

            CreateMap<CategoryRequest, Category>();
            CreateMap<Category, CategoryResponse>();

            CreateMap<PackageContent, PackageContentEntity>();  
            CreateMap<PackageContentEntity, PackageContent>();

            CreateMap<PackageContentRequest, PackageContent>();
            CreateMap<PackageContent, PackageContentResponse>();

            CreateMap<Product, ProductEntity>();
            CreateMap<ProductEntity, Product>();

            CreateMap<ProductRequest, Product>()
                .ForMember(p=>p.DateTime, o => o.Ignore());
            CreateMap<Product, ProductResponse>();
        
        }
    }
}
