using Microsoft.EntityFrameworkCore;
using SecondTech.DataAccess.Entities;
using SecondTech.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace SecondTech.DataAccess.Repositories
{
    public class ProductsRepository
    {
        private readonly SecondTechDBContext _context;
        private readonly IMapper _mapper;

        public ProductsRepository(SecondTechDBContext context, 
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

            List<Product> products = productEntities.Select(p=>_mapper.Map<Product>(p)).ToList();

            return products;
        }


    }
}
