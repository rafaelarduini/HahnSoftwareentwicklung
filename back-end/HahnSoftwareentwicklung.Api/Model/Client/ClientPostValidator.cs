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

            RuleFor(c => c.Name)
                .MaximumLength(100)
                .WithMessage($"'Name' max length is 100");

            RuleFor(c => c.Surname)
                .NotEmpty()
                .WithMessage($"'Surname' is required");

            RuleFor(c => c.Surname)
                .MaximumLength(100)
                .WithMessage($"'Surname' max length is 100");

            RuleFor(c => c.Email)
                .NotEmpty()
                .WithMessage($"'Email' is required");

            RuleFor(c => c.Email)
                .MaximumLength(100)
                .WithMessage($"'Email' max length is 100");

            RuleFor(c => c.Email)
                .EmailAddress()
                .WithMessage($"'Email' must be valid");
        }
    }
}