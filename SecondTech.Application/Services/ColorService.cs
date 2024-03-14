using AutoMapper;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using SecondTech.Core.Models;

namespace SecondTech.Application.Services
{
    public class ColorService : IColorService
    {

        private readonly IMapper _mapper;
        private readonly IColorRepository _repos;

        public ColorService(IColorRepository repos, IMapper mapper)
        {
            _mapper = mapper;
            _repos = repos;
        }

        public async Task<List<ColorResponse>> GetAll()
        {
            var colors = await _repos.GetAll();

            var responses = colors.Select(c => _mapper.Map<ColorResponse>(c)).ToList();
            return responses;
        }

        public async Task<ColorResponse> Get(Guid id)
        {
            var color = await _repos.Get(id);
            var response = _mapper.Map<ColorResponse>(color);
            return response;
        }

        public async Task<ColorResponse> Create(ColorRequest request)
        {
            var color = await _repos.Create(_mapper.Map<Color>(request));

            return _mapper.Map<ColorResponse>(color);
        }

        public async Task<bool> Update(ColorRequest request)
        {
            return await _repos.Update(_mapper.Map<Color>(request));
        }
        public async Task<bool> Delete(Guid id)
        {
            return await _repos.Delete(id);
        }
    }
}
