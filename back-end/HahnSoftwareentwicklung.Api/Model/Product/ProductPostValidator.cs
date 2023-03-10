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

            RuleFor(c => c.Price)
                .NotEmpty()
                .WithMessage($"'Surname' is required");
        }
    }
}
