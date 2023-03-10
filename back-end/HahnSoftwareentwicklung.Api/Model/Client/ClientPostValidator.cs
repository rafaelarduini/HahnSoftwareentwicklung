using FluentValidation;

namespace HahnSoftwareentwicklung.Api.Model.Client
{
    public class ClientPostValidator : AbstractValidator<ClientPostRequest>
    {
        public ClientPostValidator()
        {
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