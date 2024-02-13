using Microsoft.EntityFrameworkCore;
using SecondTech.DataAccess.Entities;
using SecondTech.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using System.Reflection.Metadata;
using SecondTech.Core.Interfaces;

namespace SecondTech.DataAccess.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly SecondTechDBContext _context;
        private readonly IMapper _mapper;

        public ProductRepository(SecondTechDBContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task<List<Product>> GetAll()
        {
            List<ProductEntity> productEntities = await _context.Products
                .AsNoTracking()
                .ToListAsync();

            List<Product> products = productEntities.Select(p => _mapper.Map<Product>(p)).ToList();

            return products;
        }

        public async Task<Product> Get(Guid id)
        {
            ProductEntity? productEntity = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);

            var product = _mapper.Map<Product>(productEntity);

            return product;
        }

        public async Task<Product> Create(Product product)
        {
            if (await _context.Products.FirstOrDefaultAsync(p => p.Id == product.Id) != null)
                return null!;

            var productEntity = _mapper.Map<ProductEntity>(product);
            productEntity.DateTime = DateTime.Now;

            CategoryEntity category = _context.Categories.FirstOrDefault(c => c.Id == product.Category!.Id)!;
            if (category != null)
                productEntity.Category = category;
            
            ColorEntity color = _context.Colors.FirstOrDefault(c => c.Id == product.Color!.Id)!;
            if (color != null)
                productEntity.Color = color;
            
            BrandEntity brand = _context.Brands.FirstOrDefault(b => b.Id == product.Brand!.Id)!;
            if (brand != null)
                productEntity.Brand = brand;

            List<CharacteristicEntity> characteristics = await _context.Characteristics.Where(c => product.Characteristics!.Any(t => t.Id == c.Id)).ToListAsync();

            foreach (var c in productEntity.Characteristics!)
            {
                if (characteristics.Any(t => t.Id == c.Id))
                    productEntity.Characteristics.Remove(c);
            }
            productEntity.Characteristics.AddRange(characteristics);

            List<PackageContentEntity> contents = await _context.PackageContents.Where(p => product.PackageContents!.Any(t => t.Id == p.Id)).ToListAsync();

            foreach (var c in productEntity.PackageContents!)
            {
                if (contents.Any(t => t.Id == c.Id))
                    productEntity.PackageContents.Remove(c);
            }
            productEntity.PackageContents.AddRange(contents);


            await _context.Products.AddAsync(productEntity);
            await _context.SaveChangesAsync();

            return _mapper.Map<Product>(productEntity);
        }

        public async Task<bool> Update(Product product)
        {
            var productEntity = await _context.Products
                .FirstOrDefaultAsync(p => p.Id == product.Id);

            if (productEntity == null)
                return false;
            productEntity = _mapper.Map<ProductEntity>(product);



            CategoryEntity category = _context.Categories.FirstOrDefault(c => c.Id == product.Category!.Id)!;
            if (category != null)
                productEntity.Category = category;

            ColorEntity color = _context.Colors.FirstOrDefault(c => c.Id == product.Color!.Id)!;
            if (color != null)
                productEntity.Color = color;

            BrandEntity brand = _context.Brands.FirstOrDefault(b => b.Id == product.Brand!.Id)!;
            if (brand != null)
                productEntity.Brand = brand;

            List<CharacteristicEntity> characteristics = await _context.Characteristics.Where(c => product.Characteristics!.Any(t => t.Id == c.Id)).ToListAsync();

            foreach (var c in productEntity.Characteristics!)
            {
                if (characteristics.Any(t => t.Id == c.Id))
                    productEntity.Characteristics.Remove(c);
            }
            productEntity.Characteristics.AddRange(characteristics);

            List<PackageContentEntity> contents = await _context.PackageContents.Where(p => product.PackageContents!.Any(t => t.Id == p.Id)).ToListAsync();

            foreach (var c in productEntity.PackageContents!)
            {
                if (contents.Any(t => t.Id == c.Id))
                    productEntity.PackageContents.Remove(c);
            }
            productEntity.PackageContents.AddRange(contents);

            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> Delete(Guid id)
        {
            var productEntity = await _context.Products
                .FirstOrDefaultAsync(p => p.Id == id);
            if (productEntity == null)
                return false;
            _context.Products.Remove(productEntity);
            await _context.SaveChangesAsync();
            return true;
        }



    }
}
