using HahnSoftwareentwicklung.Domain.Entities;
using HahnSoftwareentwicklung.DomainCore.Interfaces.Repositories;
using HahnSoftwareentwicklung.DomainCore.Interfaces.Services;

namespace HahnSoftwareentwicklung.DomainService
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