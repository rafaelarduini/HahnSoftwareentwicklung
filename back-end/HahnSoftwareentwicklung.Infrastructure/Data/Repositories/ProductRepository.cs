using HahnSoftwareentwicklung.Domain.Entities;
using HahnSoftwareentwicklung.Domain.Core.Interfaces.Repositories;

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