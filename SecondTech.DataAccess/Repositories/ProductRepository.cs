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
                .Include(p => p.Category)
                .Include(p => p.Brand)
                .Include(p => p.Color)
                .Include(p => p.Characteristics)
                .Include(p => p.PackageContents)
                .Include(p => p.ImgUrls)
                .AsNoTracking()
                .ToListAsync();

            List<Product> products = productEntities.Select(p => _mapper.Map<Product>(p)).ToList();

            return products;
        }

        public async Task<List<Product>> GetFiltrationByPage(int page, int pageSize, ProductFiltration filtr)
        {
            List<ProductEntity> productEntities = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Brand)
                .Include(p => p.Color)
                .Include(p => p.Characteristics)
                .Include(p => p.PackageContents)
                .Include(p => p.ImgUrls)
                .AsNoTracking()
                .ToListAsync();
            

            List<Product> products = productEntities.Select(p => _mapper.Map<Product>(p)).ToList();

            return filtr.Filter(products, page, pageSize);

        }

        public async Task<List<Product>> GetSearchByPage(int page, int pageSize, string request)
        {

            List<ProductEntity> productEntities = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Brand)
                .Include(p => p.Color)
                .Include(p => p.Characteristics)
                .Include(p => p.PackageContents)
                .Include(p => p.ImgUrls)
                .Where(p => p.Name.Contains(request))
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .AsNoTracking()
                .ToListAsync();

            List<Product> products = productEntities.Select(p => _mapper.Map<Product>(p)).ToList();

            return products;
        }
        public async Task<List<Product>> GetAllByPage(int page, int pageSize)
        {
            List<ProductEntity> productEntities = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Brand)
                .Include(p => p.Color)
                .Include(p => p.Characteristics)
                .Include(p => p.PackageContents)
                .Include(p => p.ImgUrls)
                .AsNoTracking()
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var users = productEntities.Select(u => _mapper.Map<Product>(u)).ToList();

            return users;
        }

        public async Task<Product> Get(Guid id)
        {
            ProductEntity? productEntity = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Brand)
                .Include(p => p.Color)
                .Include(p => p.Characteristics)
                .Include(p => p.PackageContents)
                .Include(p => p.ImgUrls)
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

            foreach (var content in contents)
            {
                var c = productEntity.PackageContents!.FirstOrDefault(t => t.Content == content.Content);
                if (c != null)
                {
                    productEntity.PackageContents!.Remove(c);
                    productEntity.PackageContents!.Add(content);
                }

            }

            //List<ImgUrlEntity> imgUrlEntities = await _context.ImgUrls.ToListAsync();

            //foreach (var imgUrl in imgUrlEntities)
            //{
            //    var i = productEntity.ImgUrls!.FirstOrDefault(t => t.Url == imgUrl.Url);
            //    if (i != null)
            //    {
            //        productEntity.ImgUrls!.Remove(i);
            //        productEntity.ImgUrls!.Add(imgUrl);
            //    }

            //}

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
                .Include(p => p.ImgUrls)
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
            productEntity.ImgUrls = product.ImgUrls!.Select(i => _mapper.Map<ImgUrlEntity>(i)).ToList();
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
                .Include(p => p.ImgUrls)
                .FirstOrDefaultAsync(p => p.Id == id);
            if (productEntity == null)
                return false;
            _context.Products.Remove(productEntity);
            await _context.SaveChangesAsync();
            return true;
        }



    }
}
