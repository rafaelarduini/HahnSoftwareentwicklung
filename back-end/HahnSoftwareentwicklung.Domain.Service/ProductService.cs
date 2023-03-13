using HahnSoftwareentwicklung.Domain.Core.Interfaces.Repositories;
using HahnSoftwareentwicklung.Domain.Core.Interfaces.Services;
using HahnSoftwareentwicklung.Domain.Entities;

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