using HahnSoftwareentwicklung.Domain.Entities;
using HahnSoftwareentwicklung.Domain.Core.Interfaces.Repositories;
using HahnSoftwareentwicklung.Domain.Core.Interfaces.Services;

namespace HahnSoftwareentwicklung.Domain.Service
{
    public class ProductService : BaseService<Product>, IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository) : base(productRepository)
        {
            _productRepository = productRepository;
        }
    }
}