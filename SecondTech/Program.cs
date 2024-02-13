using Microsoft.EntityFrameworkCore;
using SecondTech.API.Profiles;
using SecondTech.Application.Services;
using SecondTech.Core.Interfaces;
using SecondTech.DataAccess;
using SecondTech.DataAccess.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<SecondTechDBContext>(
        options =>
        {
            options.UseSqlite("Data Source=helloapp.db");
        }
    );
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<ICategorysRepository, CategoriesRepository>();

builder.Services.AddScoped<IPackageContentService, PackageContentService>();
builder.Services.AddScoped<IPackageContentRepository, PackageContentRepository>();

builder.Services.AddScoped<IBrandService, BrandService>();
builder.Services.AddScoped<IBrandRepository, BrandRepository>();

builder.Services.AddScoped<IColorService, ColorService>();
builder.Services.AddScoped<IColorRepository, ColorRepository>();

builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();

builder.Services.AddAutoMapper(typeof(MappingProfile));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
