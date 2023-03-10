using HahnSoftwareentwicklung.Application.Dtos;

namespace HahnSoftwareentwicklung.Api.Model.Client
{
    public class ClientPutRequest
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }

        public static implicit operator ClientDto(ClientPutRequest client)
            => new ClientDto()
            {
                Id = client.Id,
                Name = client.Name,
                Surname = client.Surname,
                Email = client.Email,
            };
    }
}