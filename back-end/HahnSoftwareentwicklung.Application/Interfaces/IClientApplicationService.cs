using HahnSoftwareentwicklung.Application.Dtos;

namespace HahnSoftwareentwicklung.Application.Interfaces
{
    public interface IClientApplicationService
    {
        void Add(ClientDto clienteDto);

        void Update(ClientDto clienteDto);

        void Delete(int id);

        IEnumerable<ClientDto> GetAll();

        ClientDto Get(int id);
    }
}