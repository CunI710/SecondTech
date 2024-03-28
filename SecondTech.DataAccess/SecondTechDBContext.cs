using Microsoft.EntityFrameworkCore;
using SecondTech.DataAccess.Configurations;
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
        public DbSet<CategoryEntity> Categories { get; set; } = null!;
        public DbSet<ColorEntity> Colors { get; set; } = null!;
        public DbSet<BrandEntity> Brands { get; set; } = null!;
        public DbSet<CharacteristicEntity> Characteristics { get; set; } = null!;
        public DbSet<PackageContentEntity> PackageContents { get; set; } = null!;
        public DbSet<ProductEntity> Products { get; set; } = null!;
        public DbSet<ImgUrlEntity> ImgUrls { get; set; }
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<PurchaseEntity> Purchases { get; set; }
        public SecondTechDBContext(DbContextOptions<SecondTechDBContext> options)
            : base(options)
        { 
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new BrandConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new CharacteristicConfiguration());
            modelBuilder.ApplyConfiguration(new ColorConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            //modelBuilder.ApplyConfiguration(new PackageContentConfiguration());
            //modelBuilder.ApplyConfiguration(new ProductConfiguration());
        }


    }
}
