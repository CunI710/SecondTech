using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SecondTech.Core.Interfaces.Auth;
using SecondTech.Core.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Reflection.Metadata;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Infrastructure
{
    public class JwtProvider : IJwtProvider
    {   
        private readonly JwtOptions _options;

        public JwtProvider(IOptions<JwtOptions> options)
        {
            this._options = options.Value;
        }

        public string GenerateToken(User user)
        {
            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.SecretKey)),
                SecurityAlgorithms.HmacSha256);

            Claim[] claims = { new Claim("userId", user.Id.ToString()),
                               new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role!)
            };

            var token = new JwtSecurityToken(
                signingCredentials: signingCredentials,
                claims: claims,
                expires: DateTime.UtcNow.AddHours(_options.ExpiresHours)
                );


            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
