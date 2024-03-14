using AutoMapper;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using SecondTech.Core.Models;

namespace SecondTech.Application.Services
{
    public class PackageContentService : IPackageContentService
    {

        private readonly IMapper _mapper;
        private readonly IPackageContentRepository _repos;

        public PackageContentService(IPackageContentRepository repos, IMapper mapper)
        {
            _mapper = mapper;
            _repos = repos;
        }

        public async Task<List<PackageContentResponse>> GetAll(string? category)
        {
            var contents = await _repos.GetAll();

            var responses = contents.Select(c => _mapper.Map<PackageContentResponse>(c)).ToList();
            if (category != null)
                responses = responses.Where(r => r.Category!.Name == category).ToList();

            return responses;
        }

        public async Task<PackageContentResponse> Get(Guid id)
        {
            var content = await _repos.Get(id);
            var response = _mapper.Map<PackageContentResponse>(content);
            return response;
        }

        public async Task<PackageContentResponse> Create(PackageContentRequest request)
        {
            var content = await _repos.Create(_mapper.Map<PackageContent>(request));

            return _mapper.Map<PackageContentResponse>(content);
        }

        public async Task<bool> Update(PackageContentRequest request)
        {
            return await _repos.Update(_mapper.Map<PackageContent>(request));
        }
        public async Task<bool> Delete(Guid id)
        {
            return await _repos.Delete(id);
        }

    }
}
