using SecondTech.Core.Models;
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
        Task<List<ProductResponse>> GetAllByPage(int page, int pageSize = 16);
        Task<bool> Update(ProductRequest request);
        Task RequestSale(PurchaseRequestList request);
        public Task<bool> ConfirmSale(PurchaseRequest request);
        public Task<List<PurchaseResponse>> Purchases();
    }
}
