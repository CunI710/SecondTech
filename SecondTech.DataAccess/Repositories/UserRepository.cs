using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SecondTech.Core.Helpers;
using SecondTech.Core.Models;
using SecondTech.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.DataAccess.Repositories
{
    public class UserRepository
    {

        private readonly IMapper _mapper;
        private readonly SecondTechDBContext _context;

        public UserRepository(IMapper mapper, SecondTechDBContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<User> Create(User user)
        {
            if (await _context.Users.FirstOrDefaultAsync(c => c.Id == user.Id || c.Email == user.Email || c.UserName == user.UserName || c.Number == user.Number) != null)
                return null!;

            var userEntity = _mapper.Map<UserEntity>(user);
            await _context.Users.AddAsync(userEntity);
            await _context.SaveChangesAsync();

            return _mapper.Map<User>(userEntity);
        }

        public async Task<bool> Delete(Guid id)
        {
            var userEntity = await _context.Users
                .FirstOrDefaultAsync(c => c.Id == id);
            if (userEntity == null)
                return false;
            _context.Users.Remove(userEntity);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<User> Get(Guid id)
        {
            UserEntity? userEntity = await _context.Users.FirstOrDefaultAsync(c => c.Id == id);

            var user = _mapper.Map<User>(userEntity);

            return user;
        }

        public async Task<List<User>> GetAll()
        {
            List<UserEntity> usersEntities = await _context.Users
                .AsNoTracking()
                .ToListAsync();

            var users = usersEntities.Select(u => _mapper.Map<User>(u)).ToList();

            return users;
        }

        public async Task<bool> Update(User user)
        {
            var userEntity = await _context.Users
                .FirstOrDefaultAsync(c => c.Id == user.Id);

            if (userEntity == null)
                return false;
            userEntity!.UserName = user.UserName;
            userEntity!.PasswordHash = user.PasswordHash;
            userEntity!.Number = user.Number;
            userEntity!.City = user.City;
            userEntity!.Address = user.Address;
            userEntity!.Role = user.Role;
            userEntity!.Code = user.Code;
            userEntity!.Verified = user.Verified;
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
