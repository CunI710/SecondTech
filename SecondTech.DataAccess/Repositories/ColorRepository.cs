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
    public class ColorRepository : IColorRepository
    {

        private readonly IMapper _mapper;
        private readonly SecondTechDBContext _context;

        public ColorRepository(IMapper mapper, SecondTechDBContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<Color> Create(Color color)
        {
            if (await _context.Colors.FirstOrDefaultAsync(c => c.Id == color.Id) != null)
                return null!;

            var colorEntity = _mapper.Map<ColorEntity>(color);
            await _context.Colors.AddAsync(colorEntity);
            await _context.SaveChangesAsync();

            return _mapper.Map<Color>(colorEntity);
        }

        public async Task<bool> Delete(Guid id)
        {
            var colorEntity = await _context.Colors
                .FirstOrDefaultAsync(c => c.Id == id);
            if (colorEntity == null)
                return false;
            _context.Colors.Remove(colorEntity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Color> Get(Guid id)
        {
            ColorEntity? colorEntity = await _context.Colors.FirstOrDefaultAsync(c => c.Id == id);

            var colors = _mapper.Map<Color>(colorEntity);

            return colors;
        }

        public async Task<List<Color>> GetAll()
        {
            List<ColorEntity> colorEntities = await _context.Colors
                .AsNoTracking()
                .ToListAsync();

            var colors = colorEntities.Select(c => _mapper.Map<Color>(c)).ToList();

            return colors;
        }

        public async Task<bool> Update(Color color)
        {
            var colorEntity = await _context.Colors
                .FirstOrDefaultAsync(c => c.Id == color.Id);

            if (colorEntity == null)
                return false;
            colorEntity!.Name = color.Name;
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
