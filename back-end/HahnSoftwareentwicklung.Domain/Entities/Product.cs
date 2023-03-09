namespace HahnSoftwareentwicklung.Domain.Entities
{
    public class Product : Base
    {
        public string Name { get; private set; }
        public decimal Price { get; private set; }
        public bool IsAvailable { get; private set; }

        public Product(
        int id,
        string name,
        decimal price,
        bool isAvailable = default)
        : base(id)
        {
            Name = name;
            Price = price;
            IsAvailable = isAvailable;
        }
    }
}