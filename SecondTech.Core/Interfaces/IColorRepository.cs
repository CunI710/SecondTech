using SecondTech.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Interfaces
{
    public interface IColorRepository
    {
        Task<Color> Create(Color color);
        Task<bool> Delete(Guid Id);
        Task<Color> Get(Guid id);
        Task<List<Color>> GetAll();
        Task<bool> Update(Color color);
    }
}
