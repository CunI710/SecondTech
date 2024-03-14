using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models;
using SecondTech.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.DataAccess.Repositories
{
    public class CategoriesRepository : ICategorysRepository
    {
        private readonly IMapper _mapper;
        private readonly SecondTechDBContext _context;

        public CategoriesRepository(IMapper mapper, SecondTechDBContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<List<Category>> GetAll()
        {
            List<CategoryEntity> categoryEntities = await _context.Categories
                .AsNoTracking()
                .ToListAsync();

            var categories = categoryEntities.Select(c => _mapper.Map<Category>(c)).ToList();

            return categories;
        }

        public async Task<Category> Get(Guid id)
        {
            CategoryEntity? categoryEntity = await _context.Categories.FirstOrDefaultAsync(c => c.Id == id);

            var category = _mapper.Map<Category>(categoryEntity);

            return category;
        }

        public async Task<Category> Create(Category category)
        {   
            if (await _context.Categories.FirstOrDefaultAsync(c => c.Id == category.Id || c.Name == category.Name) != null)
                return null!;

            var categoryEntity = _mapper.Map<CategoryEntity>(category);
            await _context.Categories.AddAsync(categoryEntity);
            await _context.SaveChangesAsync();

            return _mapper.Map<Category>(categoryEntity);
        }

        public async Task<bool> Update(Category category)
        {
            var categoryEntity = await _context.Categories
                .FirstOrDefaultAsync(c => c.Id == category.Id);

            if (categoryEntity == null)
                return false;
            categoryEntity!.Name = category.Name;
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> Delete(Guid id)
        {
            var categoryEntity = await _context.Categories
                .FirstOrDefaultAsync(c => c.Id == id);
            if (categoryEntity == null)
                return false;
            _context.Categories.Remove(categoryEntity);
            await _context.SaveChangesAsync();
            return true;
        }


    }
}



/*
 {
  "name": "string",
  "price": 110,
  "category": {
    "name": "Телефон"
  },
  "description": "string",
  "likes": 10,
  "state": "string",
  "imgUrl": "string",
  "color": {
    "name": "Чёрный"
  },
  "brand": {
    "name": "Apple"
  },
  "storage": "string",
  "ram": "string",
  "model": "string",
  "processor": "string",
  "battery": "string",
  "characteristics": [
    {
      "name": "Симка",
      "value": "2"
    }
  ],
  "packageContents": [
    {
      "content": "Зарядка",
      "category": {
        "name": "Телефон"
      }
    }
  ]
}
 */
