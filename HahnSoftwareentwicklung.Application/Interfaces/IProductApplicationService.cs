using HahnSoftwareentwicklung.Application.Dtos;

namespace HahnSoftwareentwicklung.Application.Interfaces
{
    public interface IProductApplicationService
    {
        void Add(ProductDto productDto);

        void Update(ProductDto productDto);

        void Delete(ProductDto productDto);

        IEnumerable<ProductDto> GetAll();

        ProductDto Get(int id);
    }
}