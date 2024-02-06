using Microsoft.EntityFrameworkCore;
using SecondTech.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.DataAccess
{
    public class SecondTechDBContext : DbContext
    {
        public DbSet<ProductEntity> Products { get; set; } = null!;
        public DbSet<CategoryEntity> Categories { get; set; } = null!;
        public DbSet<CharacteristicEntity> Characteristics { get; set; } = null!;
        public DbSet<PackageContentEntity> PackageContents { get; set; } = null!;

        public SecondTechDBContext(DbContextOptions<SecondTechDBContext> options)
            : base(options)
        { 
            
        }
    
    
    
    
    }
}
