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
                .Include(p=>p.Category)
                .Include(p=>p.Brand)
                .Include(p=>p.Color)
                .Include(p=>p.Characteristics)
                .Include(p => p.PackageContents)
                .AsNoTracking()
                .ToListAsync();

            List<Product> products = productEntities.Select(p => _mapper.Map<Product>(p)).ToList();

            return products;
        }

        public async Task<Product> Get(Guid id)
        {
            ProductEntity? productEntity = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Brand)
                .Include(p => p.Color)
                .Include(p => p.Characteristics)
                .Include(p => p.PackageContents)
                .FirstOrDefaultAsync(p => p.Id == id);

            var product = _mapper.Map<Product>(productEntity);

            return product;
        }

        public async Task<Product> Create(Product product)
        {
            if (await _context.Products.FirstOrDefaultAsync(p => p.Id == product.Id) != null)
                return null!;

            var productEntity = _mapper.Map<ProductEntity>(product);
            productEntity.DateTime = DateTime.Now;

            CategoryEntity category = _context.Categories.FirstOrDefault(c => c.Name == product.Category!.Name)!;
            if (category != null)   
                productEntity.Category = category;
                
            ColorEntity color = _context.Colors.FirstOrDefault(c => c.Name == product.Color!.Name)!;
            if (color != null)
                productEntity.Color = color;
            
            BrandEntity brand = _context.Brands.FirstOrDefault(b => b.Name == product.Brand!.Name)!;
            if (brand != null)
                productEntity.Brand = brand;


            List<PackageContentEntity> contents = await _context.PackageContents.ToListAsync();

            foreach(var content in contents)
            {
                var c = productEntity.PackageContents!.FirstOrDefault(t=>t.Content== content.Content);
                if(c != null)
                {
                    productEntity.PackageContents!.Remove(c);
                    productEntity.PackageContents!.Add(content);
                }
            
            }

            //foreach (var c in productEntity.PackageContents!)
            //{
            //    if (contents.Any(t => t.Id == c.Id))
            //        productEntity.PackageContents.Remove(c);
            //}
            //productEntity.PackageContents.AddRange(contents);


            await _context.Products.AddAsync(productEntity);
            await _context.SaveChangesAsync();

            return _mapper.Map<Product>(productEntity);
        }

        public async Task<bool> Update(Product product)
        {
            var productEntity = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Brand)
                .Include(p => p.Color)
                .Include(p => p.Characteristics)
                .Include(p => p.PackageContents)
                .FirstOrDefaultAsync(p => p.Id == product.Id);

            if (productEntity == null)
                return false;

            //productEntity = _mapper.Map<ProductEntity>(product);

            productEntity.Name = product.Name!;
            productEntity.Description = product.Description!;
            productEntity.Processor = product.Processor!;
            productEntity.Ram = product.Ram!;
            productEntity.Price = product.Price;
            productEntity.Battery = product.Battery!;
            productEntity.ImgUrl = product.ImgUrl!;
            productEntity.State = product.State!;
            productEntity.Model = product.Model!;
            productEntity.Storage = product.Storage!;

            CategoryEntity category = _context.Categories.FirstOrDefault(c => c.Name == product.Category!.Name)!;
            if (category != null)
                productEntity.Category = category;

            ColorEntity color = _context.Colors.FirstOrDefault(c => c.Name == product.Color!.Name)!;
            if (color != null)
                productEntity.Color = color;

            BrandEntity brand = _context.Brands.FirstOrDefault(b => b.Name == product.Brand!.Name)!;
            if (brand != null)
                productEntity.Brand = brand;


            List<CharacteristicEntity> charactiristics = await _context.Characteristics.ToListAsync();

            foreach (var characteristic in charactiristics)
            {
                var c = productEntity.Characteristics!.FirstOrDefault(t => t.Id == characteristic.Id);
                if (c != null)
                {
                    productEntity.Characteristics!.Remove(c);
                    productEntity.Characteristics!.Add(characteristic);
                }

            }

            List<PackageContentEntity> contents = await _context.PackageContents.ToListAsync();

            foreach (var content in contents)
            {
                var c = productEntity.PackageContents!.FirstOrDefault(t => t.Content == content.Content);
                if (c != null)
                {
                    productEntity.PackageContents!.Remove(c);
                    productEntity.PackageContents!.Add(content);
                }

            }

            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> Delete(Guid id)
        {
            var productEntity = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Brand)
                .Include(p => p.Brand)
                .Include(p => p.Color)
                .Include(p => p.Characteristics)
                .Include(p => p.PackageContents)
                .FirstOrDefaultAsync(p => p.Id == id);
            if (productEntity == null)
                return false;
            _context.Products.Remove(productEntity);
            await _context.SaveChangesAsync();
            return true;
        }



    }
}
