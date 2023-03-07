using HahnSoftwareentwicklung.Application.Dtos;
using HahnSoftwareentwicklung.Application.Interfaces;
using HahnSoftwareentwicklung.Application.Mappers.Interfaces;
using HahnSoftwareentwicklung.DomainCore.Interfaces.Services;

namespace HahnSoftwareentwicklung.Application
{
    public class ProductApplicationService : IProductApplicationService
    {
        private readonly IProductService _productService;
        private readonly IProductMapper _productMapper;

        public ProductApplicationService(IProductService productService, IProductMapper productMapper)
        {
            _productService = productService;
            _productMapper = productMapper;
        }

        public void Add(ProductDto productDto)
        {
            var product = _productMapper.MapperDtoToEntity(productDto);
            _productService.Add(product);
        }

        public void Delete(ProductDto productDto)
        {
            var product = _productMapper.MapperDtoToEntity(productDto);
            _productService.Delete(product);
        }

        public ProductDto Get(int id)
        {
            var product = _productService.GetById(id);
            return _productMapper.MapperEntityToDto(product);
        }

        public IEnumerable<ProductDto> GetAll()
        {
            var products = _productService.GetAll();
            return _productMapper.MapperListToProductsDto(products);
        }

        public void Update(ProductDto productDto)
        {
            var product = _productMapper.MapperDtoToEntity(productDto);
            _productService.Update(product);
        }
    }
}