﻿namespace HahnSoftwareentwicklung.DomainCore.Interfaces.Repositories
{
    public interface IBaseRepository<TEntitiy> where TEntitiy : class
    {
        void Add(TEntitiy obj);

        void Update(TEntitiy obj);

        void Delete(TEntitiy obj);

        IEnumerable<TEntitiy> GetAll();

        TEntitiy GetById(int id);
    }
}