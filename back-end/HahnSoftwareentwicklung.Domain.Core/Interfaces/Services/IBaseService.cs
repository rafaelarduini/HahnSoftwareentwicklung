﻿namespace HahnSoftwareentwicklung.Domain.Core.Interfaces.Services
{
    public interface IBaseService<TEntity> where TEntity : class
    {
        void Add(TEntity obj);

        void Update(TEntity obj);

        void Delete(int id);

        IEnumerable<TEntity> GetAll();

        TEntity GetById(int id);
    }
}