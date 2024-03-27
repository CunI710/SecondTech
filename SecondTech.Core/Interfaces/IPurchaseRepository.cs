using SecondTech.Core.Models;

namespace SecondTech.Core.Interfaces
{
    public interface IPurchaseRepository
    {
        Task<bool> Create(Purchase purchase);
        Task<List<Purchase>> GetAll();
    }
}