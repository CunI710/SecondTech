using SecondTech.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Interfaces
{
    public interface IBrandRepository
    {
        Task<Brand> Create(Brand brand);
        Task<bool> Delete(Guid Id);
        Task<Brand> Get(Guid id);
        Task<List<Brand>> GetAll();
        Task<bool> Update(Brand brand);
    }
}
