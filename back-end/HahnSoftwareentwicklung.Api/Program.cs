using Autofac;
using Autofac.Extensions.DependencyInjection;
using FluentValidation;
using FluentValidation.AspNetCore;
using HahnSoftwareentwicklung.Api.Model.Client;
using HahnSoftwareentwicklung.Api.Model.Product;
using HahnSoftwareentwicklung.Infrastructure.CrossCutting.IOC;
using HahnSoftwareentwicklung.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
builder.Host.ConfigureContainer<ContainerBuilder>(builder => builder.RegisterModule(new ModuleIOC()));

// Add services to the container.

string connString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<SqlContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();
builder.Services.AddControllers().AddFluentValidation();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IValidator<ClientPostRequest>, ClientPostValidator>();
builder.Services.AddTransient<IValidator<ClientPutRequest>, ClientPutValidator>();
builder.Services.AddTransient<IValidator<ProductPostRequest>, ProductPostValidator>();
builder.Services.AddTransient<IValidator<ProductPutRequest>, ProductPutValidator>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();