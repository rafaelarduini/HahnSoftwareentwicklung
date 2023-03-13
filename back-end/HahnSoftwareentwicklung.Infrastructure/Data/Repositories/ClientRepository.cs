using HahnSoftwareentwicklung.Domain.Entities;
using HahnSoftwareentwicklung.Domain.Core.Interfaces.Repositories;

namespace HahnSoftwareentwicklung.Infrastructure.Data.Repositories
{
    public class ClientRepository : BaseRepository<Client>, IClientRepository
    {
        private readonly SqlContext _sqlContext;

        public ClientRepository(SqlContext sqlContext) : base(sqlContext)
        {
            _sqlContext = sqlContext;
        }
    }
}