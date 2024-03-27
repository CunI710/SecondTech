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
    public class PurchaseRepository : IPurchaseRepository
    {

        private readonly SecondTechDBContext _context;
        private readonly IMapper _mapper;

        public PurchaseRepository(SecondTechDBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<Purchase>> GetAll()
        {
            List<PurchaseEntity> purchaseEntities = await _context.Purchases
                .AsNoTracking()
                .ToListAsync();

            List<Purchase> purhcases = purchaseEntities.Select(p => _mapper.Map<Purchase>(p)).ToList();

            return purhcases;
        }

        public async Task<bool> Create(Purchase purchase)
        {
            PurchaseEntity purchaseEntity = _mapper.Map<PurchaseEntity>(purchase);
            await _context.AddAsync(purchaseEntity);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
