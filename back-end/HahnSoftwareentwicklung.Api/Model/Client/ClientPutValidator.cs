using FluentValidation;

namespace HahnSoftwareentwicklung.Api.Model.Client
{
    public class ClientPutValidator : AbstractValidator<ClientPutRequest>
    {
        public ClientPutValidator()
        {
            RuleFor(c => c.Id)
                .NotEmpty()
                .WithMessage($"'Id' is required");

            RuleFor(c => c.Name)
                .NotEmpty()
                .WithMessage($"'Name' is required");

            RuleFor(c => c.Surname)
                .NotEmpty()
                .WithMessage($"'Surname' is required");

            RuleFor(c => c.Email)
                .NotEmpty()
                .WithMessage($"'Email' is required");
        }
    }
}