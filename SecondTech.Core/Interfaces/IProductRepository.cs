using SecondTech.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> Create(Product product);
        Task<bool> Delete(Guid Id);
        Task<Product> Get(Guid id);
        Task<List<Product>> GetAll();
        Task<List<Product>> GetAllByPage(int page, int pageSize);
        Task<bool> Update(Product product);
    }
}
