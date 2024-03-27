using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SecondTech.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.DataAccess.Configurations
{
    public class CharacteristicConfiguration : IEntityTypeConfiguration<CharacteristicEntity>
    {
        public void Configure(EntityTypeBuilder<CharacteristicEntity> builder)
        {
            builder.HasOne(p => p.Product)
                .WithMany(p => p.Characteristics)
                .OnDelete(DeleteBehavior.Cascade);


        }
    }
}
