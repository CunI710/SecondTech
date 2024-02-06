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
            builder.Property(p => p.Name).IsRequired();
            builder.Property(p => p.Value).IsRequired();
        }
    }
}
