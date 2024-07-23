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
        public DbSet<CategoryEntity> Categories { get; set; } = null!; // Категории продукта
        public DbSet<ColorEntity> Colors { get; set; } = null!; // Цвета продукта
        public DbSet<BrandEntity> Brands { get; set; } = null!; // Брэнды продукта
        public DbSet<CharacteristicEntity> Characteristics { get; set; } = null!; // Характиристики продукта
        public DbSet<PackageContentEntity> PackageContents { get; set; } = null!; // Комплектующие продукта
        public DbSet<ProductEntity> Products { get; set; } = null!; // продукты
        public DbSet<ImgUrlEntity> ImgUrls { get; set; } // Изображения продукта
        public DbSet<UserEntity> Users { get; set; } // Пользователь
        public DbSet<PurchaseEntity> Purchases { get; set; } // проданные продукты
        public SecondTechDBContext(DbContextOptions<SecondTechDBContext> options)
            : base(options)
        { 
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new BrandConfiguration());          // тут подключаются конфигурации
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new CharacteristicConfiguration());
            modelBuilder.ApplyConfiguration(new ColorConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
        }
    }
}
