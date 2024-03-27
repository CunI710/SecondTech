using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SecondTech.API.Profiles;
using SecondTech.Application.Services;
using SecondTech.Core.Interfaces;
using SecondTech.Core.Interfaces.Auth;
using SecondTech.DataAccess;
using SecondTech.DataAccess.Repositories;
using SecondTech.Infrastructure;
using System.Text;
using SecondTech.API.Extensions;
using Microsoft.AspNetCore.CookiePolicy;
using SecondTech.Core.Settings;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


//builder.Logging.AddFile(Path.Combine(Directory.GetCurrentDirectory(), "logger.txt"));

builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection(nameof(JwtOptions)));
builder.Services.Configure<EmailSendSettings>(builder.Configuration.GetSection(nameof(EmailSendSettings)));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

builder.Services.AddDbContext<SecondTechDBContext>(
        options =>
        {
            options.UseSqlite("Data Source=helloapp.db");
        }
);

builder.Services.AddApiAuthentication(builder.Configuration);
builder.Services.AddLogging(b =>
{
    b.AddFile("logger.txt");
    b.AddConsole();

});

builder.Services.AddScoped<IJwtProvider, JwtProvider>();
builder.Services.AddScoped<IMessageSenderProvider, EmailSenderProvider>();


builder.Services.AddScoped<IAttributeService, AttributeService>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IMessageSenderService, EmailSenderService>();


builder.Services.AddScoped<IAttributeRepository, AttributeRepository>();
builder.Services.AddScoped<IPurchaseRepository, PurchaseRepository>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

builder.Services.AddAutoMapper(typeof(MappingProfile));

var app = builder.Build();

app.UseCors(builder => {
    builder.AllowAnyOrigin();
    builder.AllowAnyHeader();
    builder.AllowAnyMethod();
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.UseAuthorization();

app.UseCookiePolicy(new CookiePolicyOptions
{
    MinimumSameSitePolicy = SameSiteMode.Strict,
    HttpOnly = HttpOnlyPolicy.Always,
    Secure = CookieSecurePolicy.Always
});

app.MapControllers();

app.Run();
