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
    public class PackageContentConfiguration : IEntityTypeConfiguration<PackageContentEntity>
    {
        public void Configure(EntityTypeBuilder<PackageContentEntity> builder)
        {
        }
    }
}
