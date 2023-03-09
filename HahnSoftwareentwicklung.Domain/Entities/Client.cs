namespace HahnSoftwareentwicklung.Domain.Entities
{
    public class Client : Base
    {
        public string Name { get; private set; }
        public string Surname { get; private set; }
        public string Email { get; private set; }
        public DateTime RegistrationDate { get; private set; }
        public bool IsActive { get; private set; }

        public Client(
            int id,
            string name,
            string surname,
            string email,
            DateTime registrationDate = default,
            bool isActive = default)
            : base(id)
        {
            Name = name;
            Surname = surname;
            Email = email;
            RegistrationDate = registrationDate;
            IsActive = isActive;
        }
    }
}