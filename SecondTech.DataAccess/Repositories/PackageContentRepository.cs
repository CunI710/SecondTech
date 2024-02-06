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
    public class PackageContentRepository : IPackageContentRepository
    {

        private readonly IMapper _mapper;
        private readonly SecondTechDBContext _context;

        public PackageContentRepository(IMapper mapper, SecondTechDBContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<List<PackageContent>> GetAll()
        {
            List<PackageContentEntity> contentEntities = await _context.PackageContents
                .Include(p => p.Category)
                .AsNoTracking()
                .ToListAsync();

            var contents = contentEntities.Select(c => _mapper.Map<PackageContent>(c)).ToList();

            return contents;
        }

        public async Task<PackageContent> Get(Guid id)
        {
            PackageContentEntity? contentEntity = await _context.PackageContents
                .Include(p => p.Category)
                .FirstOrDefaultAsync(c => c.Id == id);

            var content = _mapper.Map<PackageContent>(contentEntity);

            return content;
        }

        public async Task<PackageContent> Create(PackageContent content)
        {

            if (await _context.PackageContents
                .FirstOrDefaultAsync(p => p.Id == content.Id || p.Content == content.Content) != null)
                return null!;


            var contentEntity = _mapper.Map<PackageContentEntity>(content);
            CategoryEntity category = _context.Categories.FirstOrDefault(c=>c.Id == content.Category!.Id)!;
            if(category != null)
                contentEntity.Category = category;
            
            await _context.PackageContents.AddAsync(contentEntity);
            await _context.SaveChangesAsync();

            return _mapper.Map<PackageContent>(contentEntity);
        }

        public async Task<bool> Update(PackageContent content)
        {
            var contentEntity = await _context.PackageContents
                .Include(p => p.Category)
                .FirstOrDefaultAsync(p => p.Id == content.Id);

            if (contentEntity == null)
                return false;
            CategoryEntity category = _context.Categories.FirstOrDefault(c => c.Id == content.Category!.Id)!;

            contentEntity!.Content = content.Content;
            if (category != null)
                contentEntity.Category = category;
            else 
                contentEntity.Category = _mapper.Map<CategoryEntity>(content.Category);
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<bool> Delete(Guid id)
        {
            var contentEntity = await _context.PackageContents
                .FirstOrDefaultAsync(p => p.Id == id);

            if (contentEntity == null)
                return false;
            _context.PackageContents.Remove(contentEntity);
            await _context.SaveChangesAsync();
            return true;
        }

    }
}
