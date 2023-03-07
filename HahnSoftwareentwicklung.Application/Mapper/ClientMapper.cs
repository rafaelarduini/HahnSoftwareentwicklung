using HahnSoftwareentwicklung.Application.Dtos;
using HahnSoftwareentwicklung.Application.Mappers.Interfaces;
using HahnSoftwareentwicklung.Domain.Entities;

namespace HahnSoftwareentwicklung.Application.Mapper
{
    public class ClientMapper : IClientMapper
    {
        public Client MapperDtoToEntity(ClientDto clientDto)
            => new Client(
                id: clientDto.Id ?? default,
                name: clientDto.Name,
                surname: clientDto.Surname,
                email: clientDto.Email);

        public ClientDto MapperEntityToDto(Client client)
            => new ClientDto()
            {
                Id = client.Id,
                Name = client.Name,
                Surname = client.Surname,
                Email = client.Email
            };

        public IEnumerable<ClientDto> MapperListToClientsDto(IEnumerable<Client> clients)
            => clients.Select(client => new ClientDto()
            {
                Id = client.Id,
                Name = client.Name,
                Surname = client.Surname,
                Email = client.Email
            });
    }
}