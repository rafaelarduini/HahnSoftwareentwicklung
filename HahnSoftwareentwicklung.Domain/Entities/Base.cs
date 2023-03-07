namespace HahnSoftwareentwicklung.Domain.Entities
{
    public class Base
    {
        public int Id { get; private set; }

        public Base(int id)
        {
            Id = id;
        }
    }
}