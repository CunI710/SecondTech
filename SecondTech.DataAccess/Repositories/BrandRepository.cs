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
    public class BrandRepository : IBrandRepository
    {

        private readonly IMapper _mapper;
        private readonly SecondTechDBContext _context;

        public BrandRepository(IMapper mapper, SecondTechDBContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<List<Brand>> GetAll()
        {

            List<BrandEntity> brandEntities = await _context.Brands
                .AsNoTracking()
                .ToListAsync();

            var brands = brandEntities.Select(b => _mapper.Map<Brand>(b)).ToList();

            return brands;
        }

        public async Task<Brand> Get(Guid id)
        {
            BrandEntity? brandEntity = await _context.Brands.FirstOrDefaultAsync(b => b.Id == id);

            var brand = _mapper.Map<Brand>(brandEntity);

            return brand;
        }

        public async Task<Brand> Create(Brand brand)
        {
            if (await _context.Brands.FirstOrDefaultAsync(b => b.Id == brand.Id || b.Name == brand.Name) != null)
                return null!;

            var brandEntity = _mapper.Map<BrandEntity>(brand);
            await _context.Brands.AddAsync(brandEntity);
            await _context.SaveChangesAsync();

            return _mapper.Map<Brand>(brandEntity);
        }

        public async Task<bool> Update(Brand brands)
        {
            var brandEntity = await _context.Brands
                .FirstOrDefaultAsync(b => b.Id == brands.Id);

            if (brandEntity == null)
                return false;
            brandEntity!.Name = brands.Name!;
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> Delete(Guid id)
        {
            var brandEntity = await _context.Brands
                .FirstOrDefaultAsync(b => b.Id == id);
            if (brandEntity == null)
                return false;
            _context.Brands.Remove(brandEntity);
            await _context.SaveChangesAsync();
            return true;
        }

    }
}
