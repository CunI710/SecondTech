using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SecondTech.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.DataAccess.Configurations
{
    public class ColorConfiguration : IEntityTypeConfiguration<ColorEntity>
    {
        public void Configure(EntityTypeBuilder<ColorEntity> builder)
        {
            builder.HasMany(p => p.Products)
                .WithOne(p => p.Color)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(p => p.SoldProducts)
                .WithOne(p => p.Color)
                .OnDelete(DeleteBehavior.Cascade);

        }
    }
}
