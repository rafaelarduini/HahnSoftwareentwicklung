using HahnSoftwareentwicklung.Domain.Entities;
using HahnSoftwareentwicklung.DomainCore.Interfaces.Repositories;
using HahnSoftwareentwicklung.DomainCore.Interfaces.Services;

namespace HahnSoftwareentwicklung.DomainService
{
    public class ClientService : BaseService<Client>, IClientService
    {
        private readonly IClientRepository _clientRepository;

        public ClientService(IClientRepository clientRepository) : base(clientRepository)
        {
            _clientRepository = clientRepository;
        }
    }
}