using HahnSoftwareentwicklung.Application.Dtos;

namespace HahnSoftwareentwicklung.Api.Model.Client
{
    public class ClientPostRequest
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }

        public static implicit operator ClientDto(ClientPostRequest client)
            => new ClientDto()
            {
                Name = client.Name,
                Surname = client.Surname,
                Email = client.Email,
            };
    }
}