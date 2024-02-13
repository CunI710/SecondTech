using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Interfaces
{
    public interface IBrandService
    {
        Task<BrandResponse> Create(BrandRequest request);
        Task<bool> Delete(Guid Id);
        Task<BrandResponse> Get(Guid id);
        Task<List<BrandResponse>> GetAll();
        Task<bool> Update(BrandRequest request);
    }
}
