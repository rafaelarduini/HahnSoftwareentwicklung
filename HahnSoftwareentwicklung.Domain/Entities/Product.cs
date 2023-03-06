namespace HahnSoftwareentwicklung.Domain.Entities
{
    public class Product : Base
    {
        public string Name { get; set; }
        public decimal Valor { get; set; }
        public bool IsAvailable { get; set; }
    }
}
