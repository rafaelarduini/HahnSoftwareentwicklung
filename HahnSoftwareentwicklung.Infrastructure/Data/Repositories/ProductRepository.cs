using HahnSoftwareentwicklung.Domain.Entities;
using HahnSoftwareentwicklung.DomainCore.Interfaces.Repositories;

namespace HahnSoftwareentwicklung.Infrastructure.Data.Repositories
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        private readonly SqlContext _sqlContext;

        public ProductRepository(SqlContext sqlContext) : base(sqlContext)
        {
            _sqlContext = sqlContext;
        }
    }
}