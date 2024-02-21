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


            CreateMap<Brand, BrandEntity>();
            CreateMap<BrandEntity, Brand>();

            CreateMap<BrandRequest, Brand>();
            CreateMap<Brand, BrandResponse>();


            CreateMap<Color, ColorEntity>();
            CreateMap<ColorEntity, Color>();

            CreateMap<ColorRequest, Color>();
            CreateMap<Color, ColorResponse>();


            CreateMap<Category, CategoryEntity>();
            CreateMap<CategoryEntity, Category>();

            CreateMap<CategoryRequest, Category>();
            CreateMap<Category, CategoryResponse>();


            CreateMap<Characteristic, CharacteristicEntity>();
            CreateMap<CharacteristicEntity, Characteristic>();

            CreateMap<CharacteristicRequest, Characteristic>();
            CreateMap<Characteristic, CharacteristicResponse>();


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


/*
 {
  "id": "8b323600-32d5-45db-8934-3b0e5daf3651",
  "name": "IPhone 213",
  "price": 20132,
  "category": {
    "id": "7dca5de1-6a02-4f4c-ae5b-7035bee18601"
  },
  "description": "Nice Phone",
  "likes": 5,
  "state": "хороший",
  "imgUrl": "https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042.jpg?itok=e04DvWrq",
  "color": {
    "id": "d0cf93e9-a896-43ce-bfab-b1da308a90f2"
  },
  "brand": {
    "id": "4ca144df-3a6f-461f-9fb3-96da351d4628"
  },
  "storage": "123",
  "ram": "321",
  "model": "jslad",
  "processor": "Intel",
  "battery": "1M",
  "characteristics": [
    {
      "name": "SimCard",
      "value": "2"
    }
  ],
  "packageContents": [
    {
      "id": "bb2ea734-f8b1-4ab5-9ae1-2ddddc9a0330"
    }
  ]
}
 */