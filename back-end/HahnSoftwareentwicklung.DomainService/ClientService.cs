using HahnSoftwareentwicklung.Domain.Entities;
using HahnSoftwareentwicklung.Domain.Core.Interfaces.Repositories;
using HahnSoftwareentwicklung.Domain.Core.Interfaces.Services;

namespace HahnSoftwareentwicklung.Domain.Service
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