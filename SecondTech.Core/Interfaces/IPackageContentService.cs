using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Interfaces
{
    public interface IPackageContentService
    {
        Task<PackageContentResponse> Create(PackageContentRequest request);
        Task<bool> Delete(Guid id);
        Task<PackageContentResponse> Get(Guid id);
        Task<List<PackageContentResponse>> GetAll(string? category);
        Task<bool> Update(PackageContentRequest request);
    }
}
