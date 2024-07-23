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

        public AttributeRepository(SecondTechDBContext context, IMapper mapper) // конструктор принимает данные, благодаря dependency injection
        {
            _context = context; // база данных
            _mapper = mapper; // automapper
        }

        public async Task<List<Brand>> GetBrands() // возвращает бренды
        {
            var brandEntities = await _context.Brands.ToListAsync();

            return brandEntities.Select(b => _mapper.Map<Brand>(b)).ToList();
        }

        public async Task<List<Category>> GetCategories() // возвращает категории
        {
            var categoryEntities = await _context.Categories.ToListAsync();

            return categoryEntities.Select(c => _mapper.Map<Category>(c)).ToList();
        }
        public async Task<List<Color>> GetColors() // возвращает цвета
        {
            var colorEntities = await _context.Colors.ToListAsync();

            return colorEntities.Select(c => _mapper.Map<Color>(c)).ToList();
        }
        public async Task<List<PackageContent>> GetPackageContents() // возвращает комплектующие
        {
            var packageContentEntities = await _context.PackageContents.ToListAsync();

            return packageContentEntities.Select(p => _mapper.Map<PackageContent>(p)).ToList();
        }

    }
}
