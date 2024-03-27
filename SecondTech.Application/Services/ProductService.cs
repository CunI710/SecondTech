using AutoMapper;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using SecondTech.Core.Models;
using System.Reflection;

namespace SecondTech.Application.Services
{
    public class ProductService : IProductService
    {

        private readonly IMapper _mapper;
        private readonly IMessageSenderService sender;
        private readonly IPurchaseRepository purchaseRepos;
        private readonly IProductRepository _repos;

        public ProductService(IProductRepository repos, IMapper mapper, IMessageSenderService sender,IPurchaseRepository purchaseRepos)
        {
            _mapper = mapper;
            this.sender = sender;
            this.purchaseRepos = purchaseRepos;
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
        public async Task RequestSale(PurchaseRequest request)
        {
            var product = await _repos.Get(request.ProductId);
            if (product == null)
                throw new Exception("Не найдено");
            Purchase purchase = new Purchase(request, product);
            await sender.SendPurchaseMessage(purchase, "gokinpoty@gmail.com", "hello"); 
        }
        public async Task<bool> ConfirmSale(PurchaseRequest request)
        {
            var product = await _repos.Get(request.ProductId);
            Purchase purchasee = new Purchase(request, product);
            if (await purchaseRepos.Create(purchasee) && await _repos.Delete(product.Id))
            {
                return true;
            }
            return false;
            
        }
        public async Task<List<PurchaseResponse>> Purchases()
        {
            var purchase = await purchaseRepos.GetAll();

            var responses = purchase.Select(c => _mapper.Map<PurchaseResponse>(c)).ToList();

            return responses;
        }
       
    }
}
