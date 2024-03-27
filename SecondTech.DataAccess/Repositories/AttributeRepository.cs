using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.DataAccess.Repositories
{
    public class AttributeRepository : IAttributeRepository
    {
        private SecondTechDBContext _context;
        private IMapper _mapper;

        public AttributeRepository(SecondTechDBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<Brand>> GetBrands()
        {
            var brandEntities = await _context.Brands.ToListAsync();

            return brandEntities.Select(b => _mapper.Map<Brand>(b)).ToList();
        }

        public async Task<List<Category>> GetCategories()
        {
            var categoryEntities = await _context.Categories.ToListAsync();

            return categoryEntities.Select(c => _mapper.Map<Category>(c)).ToList();
        }
        public async Task<List<Color>> GetColors()
        {
            var colorEntities = await _context.Colors.ToListAsync();

            return colorEntities.Select(c => _mapper.Map<Color>(c)).ToList();
        }
        public async Task<List<PackageContent>> GetPackageContents()
        {
            var packageContentEntities = await _context.PackageContents.ToListAsync();

            return packageContentEntities.Select(p => _mapper.Map<PackageContent>(p)).ToList();
        }

    }
}
