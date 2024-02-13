using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Interfaces
{
    public interface IProductService
    {   
        Task<ProductResponse> Create(ProductRequest request);
        Task<bool> Delete(Guid id);
        Task<ProductResponse> Get(Guid id);
        Task<List<ProductResponse>> GetAll();
        Task<bool> Update(ProductRequest request);
    }
}
