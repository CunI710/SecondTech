using AutoMapper;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using SecondTech.Core.Models;

namespace SecondTech.Application.Services
{
    public class ProductService : IProductService
    {

        private readonly IMapper _mapper;
        private readonly IProductRepository _repos;

        public ProductService(IProductRepository repos, IMapper  mapper)
        {
            _mapper = mapper;
            _repos = repos;
        }

        public async Task<List<ProductResponse>> GetAll()
        {
            var product = await _repos.GetAll();

            var responses = product.Select(c => _mapper.Map<ProductResponse>(c)).ToList();
            
            return responses;
        }

        public async Task<ProductResponse> Get(Guid id)
        {
            var product = await _repos.Get(id);
            var response = _mapper.Map<ProductResponse>(product);
            return response;
        }

        public async Task<ProductResponse> Create(ProductRequest request)
        {
            var product = await _repos.Create(_mapper.Map<Product>(request));

            return _mapper.Map<ProductResponse>(product);
        }

        public async Task<bool> Update(ProductRequest request)
        {
            return await _repos.Update(_mapper.Map<Product>(request));
        }

        public async Task<bool> Delete(Guid id)
        {
            return await _repos.Delete(id);
        }
    }
}
