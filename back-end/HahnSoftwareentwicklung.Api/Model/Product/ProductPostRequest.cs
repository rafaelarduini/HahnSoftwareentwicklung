using HahnSoftwareentwicklung.Application.Dtos;

namespace HahnSoftwareentwicklung.Api.Model.Product
{
    public class ProductPostRequest
    {
        public string Name { get; set; }
        public decimal Price { get; set; }

        public static implicit operator ProductDto(ProductPostRequest client)
            => new ProductDto()
            {
                Name = client.Name,
                Price = client.Price,
            };
    }
}