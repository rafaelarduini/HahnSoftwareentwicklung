﻿using Autofac;
using HahnSoftwareentwicklung.Application;
using HahnSoftwareentwicklung.Application.Interfaces;
using HahnSoftwareentwicklung.Application.Mapper;
using HahnSoftwareentwicklung.Application.Mappers.Interfaces;
using HahnSoftwareentwicklung.Domain.Core.Interfaces.Repositories;
using HahnSoftwareentwicklung.Domain.Core.Interfaces.Services;
using HahnSoftwareentwicklung.Domain.Service;
using HahnSoftwareentwicklung.Infrastructure.Data.Repositories;

namespace HahnSoftwareentwicklung.Infrastructure.CrossCutting.IOC
{
    public class ConfigurationIOC
    {
        public static void Load(ContainerBuilder builder)
        {
            builder.RegisterType<ClientApplicationService>().As<IClientApplicationService>();
            builder.RegisterType<ProductApplicationService>().As<IProductApplicationService>();
            builder.RegisterType<ClientService>().As<IClientService>();
            builder.RegisterType<ProductService>().As<IProductService>();
            builder.RegisterType<ClientRepository>().As<IClientRepository>();
            builder.RegisterType<ProductRepository>().As<IProductRepository>();
            builder.RegisterType<ClientMapper>().As<IClientMapper>();
            builder.RegisterType<ProductMapper>().As<IProductMapper>();
        }
    }
}