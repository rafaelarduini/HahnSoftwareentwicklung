using HahnSoftwareentwicklung.DomainCore.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;

namespace HahnSoftwareentwicklung.Infrastructure.Data.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        private readonly SqlContext _sqlContext;

        public BaseRepository(SqlContext sqlContext)
        {
            _sqlContext = sqlContext;
        }

        public void Add(TEntity obj)
        {
            _sqlContext.Set<TEntity>().Add(obj);
            _sqlContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var obj = _sqlContext.Set<TEntity>().Find(id);
            _sqlContext.Set<TEntity>().Remove(obj);
            _sqlContext.SaveChanges();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _sqlContext.Set<TEntity>().ToList();
        }

        public TEntity GetById(int id)
        {
            return _sqlContext.Set<TEntity>().Find(id);
        }

        public void Update(TEntity obj)
        {
            _sqlContext.Entry(obj).State = EntityState.Modified;
            _sqlContext.SaveChanges();
        }
    }
}