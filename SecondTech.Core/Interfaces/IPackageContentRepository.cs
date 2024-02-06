using SecondTech.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Interfaces
{
    public interface IPackageContentRepository
    {
        Task<PackageContent> Create(PackageContent content);
        Task<bool> Delete(Guid id);
        Task<PackageContent> Get(Guid id);
        Task<List<PackageContent>> GetAll();
        Task<bool> Update(PackageContent content);
    }
}
