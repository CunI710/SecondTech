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
    public class ProductConfiguration : IEntityTypeConfiguration<ProductEntity>
    {
        public void Configure(EntityTypeBuilder<ProductEntity> builder)
        {
            builder.Property(p=>p.Name).IsRequired();
            builder.Property(p=>p.Category).IsRequired();
            builder.Property(p=>p.Description).IsRequired();
            builder.Property(p=>p.ImgUrl).IsRequired();
            builder.Property(p=>p.Color).IsRequired();
            builder.Property(p=>p.Brand).IsRequired();
            builder.Property(p=>p.Storage).IsRequired();
            builder.Property(p=>p.Ram).IsRequired();
            builder.Property(p=>p.Model).IsRequired();
            builder.Property(p=>p.Processor).IsRequired();
            builder.Property(p=>p.Battery).IsRequired();
        }
    }
}
