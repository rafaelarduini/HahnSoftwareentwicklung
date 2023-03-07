using HahnSoftwareentwicklung.Application.Dtos;
using HahnSoftwareentwicklung.Domain.Entities;

namespace HahnSoftwareentwicklung.Application.Mappers.Interfaces
{
    internal interface IProductMapper
    {
        Product MapperDtoToEntity(ProductDto productDto);

        IEnumerable<ProductDto> MapperListToProductsDto(IEnumerable<Product> products);

        ProductDto MapperEntityToDto(Product product);
    }
}