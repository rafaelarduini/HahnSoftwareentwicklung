using FluentValidation;

namespace HahnSoftwareentwicklung.Api.Model.Product
{
    public class ProductPostValidator : AbstractValidator<ProductPostRequest>
    {
        public ProductPostValidator()
        {
            RuleFor(c => c.Name)
                .NotEmpty()
                .WithMessage($"'Name' is required");

            RuleFor(c => c.Name)
                .MaximumLength(100)
                .WithMessage($"'Name' max length is 100");

            RuleFor(c => c.Price)
                .GreaterThan(0)
                .WithMessage($"'Price' must be greater than zero");
        }
    }
}
