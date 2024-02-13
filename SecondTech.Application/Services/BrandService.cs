using AutoMapper;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using SecondTech.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Application.Services
{
    public class BrandService : IBrandService
    {

        private readonly IMapper _mapper;
        private readonly IBrandRepository _repos;

        public BrandService(IBrandRepository repos, IMapper mapper)
        {
            _mapper = mapper;
            _repos = repos;
        }

        public async Task<List<BrandResponse>> GetAll()
        {
            var brands = await _repos.GetAll();

            var responses = brands.Select(c => _mapper.Map<BrandResponse>(c)).ToList();
            return responses;
        }

        public async Task<BrandResponse> Get(Guid id)
        {
            var brand = await _repos.Get(id);
            var response = _mapper.Map<BrandResponse>(brand);
            return response;
        }

        public async Task<BrandResponse> Create(BrandRequest request)
        {
            var brand = await _repos.Create(_mapper.Map<Brand>(request));

            return _mapper.Map<BrandResponse>(brand);
        }

        public async Task<bool> Update(BrandRequest request)
        {
            return await _repos.Update(_mapper.Map<Brand>(request));
        }
        public async Task<bool> Delete(Guid id)
        {
            return await _repos.Delete(id);
        }
    }
}
