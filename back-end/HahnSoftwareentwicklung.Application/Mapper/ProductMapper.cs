using HahnSoftwareentwicklung.Application.Dtos;
using HahnSoftwareentwicklung.Application.Mappers.Interfaces;
using HahnSoftwareentwicklung.Domain.Entities;

namespace HahnSoftwareentwicklung.Application.Mapper
{
    public class ProductMapper : IProductMapper
    {
        public Product MapperDtoToEntity(ProductDto productDto)
            => new Product(
                id: productDto.Id ?? default,
                name: productDto.Name,
                price: productDto.Price);

        public ProductDto MapperEntityToDto(Product product)
            => new ProductDto()
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price
            };

        public IEnumerable<ProductDto> MapperListToProductsDto(IEnumerable<Product> products)
            => products.Select(product => new ProductDto()
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price
            });
    }
}