using AutoMapper;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Application.Services
{
    public class AttributeService : IAttributeService
    {
        private IAttributeRepository _repos;
        private IMapper _mapper;

        public AttributeService(IAttributeRepository repos, IMapper mapper)
        {
            _repos = repos;
            _mapper = mapper;
        }

        public async Task<List<BrandResponse>> GetBrands()
        {
            var brands = await _repos.GetBrands();

            return brands.Select(c => _mapper.Map<BrandResponse>(c)).ToList();
        }

        public async Task<List<CategoryResponse>> GetCategories()
        {
            var categories = await _repos.GetCategories();

            return categories.Select(c => _mapper.Map<CategoryResponse>(c)).ToList();
        }

        public async Task<List<ColorResponse>> GetColors()
        {
            var colors = await _repos.GetColors();

            return colors.Select(c => _mapper.Map<ColorResponse>(c)).ToList();
        }

        public async Task<List<PackageContentResponse>> GetPackageContents()
        {
            var packageContents = await _repos.GetPackageContents();

            return packageContents.Select(c => _mapper.Map<PackageContentResponse>(c)).ToList();
        }


    }
}
