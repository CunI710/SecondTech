using SecondTech.Core.Models;

namespace SecondTech.Core.Interfaces.Auth
{
    public interface IJwtProvider
    {
        string GenerateToken(User user);
    }
}