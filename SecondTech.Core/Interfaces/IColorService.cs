using SecondTech.Core.Models.Requests;
using SecondTech.Core.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Interfaces
{
    public interface IColorService
    {
        Task<ColorResponse> Create(ColorRequest request);
        Task<bool> Delete(Guid Id);
        Task<ColorResponse> Get(Guid id);
        Task<List<ColorResponse>> GetAll();
        Task<bool> Update(ColorRequest request);
    }
}
