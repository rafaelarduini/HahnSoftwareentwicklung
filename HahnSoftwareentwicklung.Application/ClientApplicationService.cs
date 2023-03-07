using HahnSoftwareentwicklung.Application.Dtos;
using HahnSoftwareentwicklung.Application.Interfaces;
using HahnSoftwareentwicklung.DomainCore.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HahnSoftwareentwicklung.Application
{
    public class ClientApplicationService : IClientApplicationService
    {
        private readonly IClientService clientService;
        private readonly IClientMapper mapperCLient;
        public void Add(ClientDto clienteDto)
        {
            throw new NotImplementedException();
        }

        public void Delete(ClientDto clienteDto)
        {
            throw new NotImplementedException();
        }

        public ClientDto Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ClientDto> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Update(ClientDto clienteDto)
        {
            throw new NotImplementedException();
        }
    }
}
