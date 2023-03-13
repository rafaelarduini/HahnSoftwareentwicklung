using HahnSoftwareentwicklung.Application.Dtos;
using HahnSoftwareentwicklung.Application.Interfaces;
using HahnSoftwareentwicklung.Application.Mappers.Interfaces;
using HahnSoftwareentwicklung.Domain.Core.Interfaces.Services;

namespace HahnSoftwareentwicklung.Application
{
    public class ClientApplicationService : IClientApplicationService
    {
        private readonly IClientService _clientService;
        private readonly IClientMapper _clientMapper;

        public ClientApplicationService(IClientService clientService, IClientMapper clientMapper)
        {
            _clientService = clientService;
            _clientMapper = clientMapper;
        }

        public void Add(ClientDto clientDto)
        {
            var client = _clientMapper.MapperDtoToEntity(clientDto);
            _clientService.Add(client);
        }

        public void Delete(int id)
        {
            _clientService.Delete(id);
        }

        public ClientDto Get(int id)
        {
            var client = _clientService.GetById(id);
            return _clientMapper.MapperEntityToDto(client);
        }

        public IEnumerable<ClientDto> GetAll()
        {
            var clients = _clientService.GetAll();
            return _clientMapper.MapperListToClientsDto(clients);
        }

        public void Update(ClientDto clientDto)
        {
            var client = _clientMapper.MapperDtoToEntity(clientDto);
            _clientService.Update(client);
        }
    }
}