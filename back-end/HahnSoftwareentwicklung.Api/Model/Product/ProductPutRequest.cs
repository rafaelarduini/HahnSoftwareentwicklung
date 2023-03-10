using HahnSoftwareentwicklung.Application.Dtos;

namespace HahnSoftwareentwicklung.Api.Model.Product
{
    public class ProductPutRequest
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public static implicit operator ProductDto(ProductPutRequest client)
            => new ProductDto()
            {
                Id = client.Id,
                Name = client.Name,
                Price = client.Price,
            };
    }
}