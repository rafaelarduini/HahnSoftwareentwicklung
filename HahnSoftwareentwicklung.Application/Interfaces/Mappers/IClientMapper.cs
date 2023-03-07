using HahnSoftwareentwicklung.Application.Dtos;
using HahnSoftwareentwicklung.Domain.Entities;

namespace HahnSoftwareentwicklung.Application.Mappers.Interfaces
{
    public interface IClientMapper
    {
        Client MapperDtoToEntity(ClientDto clientDto);

        IEnumerable<ClientDto> MapperListToClientsDto(IEnumerable<Client> clients);

        ClientDto MapperEntityToDto(Client client);
    }
}