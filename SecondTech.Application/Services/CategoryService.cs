using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using SecondTech.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Application.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IMapper _mapper;
        private readonly ICategorysRepository _repos;

        public CategoryService(ICategorysRepository repos, IMapper mapper)
        {
            _mapper = mapper;
            _repos = repos;
        }

        public async Task<List<CategoryResponse>> GetAll()
        {
            var categories = await _repos.GetAll();

            var responses = categories.Select(c => _mapper.Map<CategoryResponse>(c)).ToList();
            return responses;
        }

        public async Task<CategoryResponse> Get(Guid id)
        {
            var category = await _repos.Get(id);
            var response = _mapper.Map<CategoryResponse>(category);
            return response;
        }

        public async Task<CategoryResponse> Create(CategoryRequest request)
        {
            var category = await _repos.Create(_mapper.Map<Category>(request));

            return _mapper.Map<CategoryResponse>(category);
        }

        public async Task<bool> Update(CategoryRequest request)
        {
            return await _repos.Update(_mapper.Map<Category>(request));
        }
        public async Task<bool> Delete(Guid id)
        {
            return await _repos.Delete(id);
        }



    }
}
