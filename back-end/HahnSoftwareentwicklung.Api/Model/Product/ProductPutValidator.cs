using FluentValidation;

namespace HahnSoftwareentwicklung.Api.Model.Product
{
    public class ProductPutValidator : AbstractValidator<ProductPutRequest>
    {
        public ProductPutValidator()
        {
            RuleFor(c => c.Id)
                .NotEmpty()
                .WithMessage($"'Id' is required");

            RuleFor(c => c.Name)
                .NotEmpty()
                .WithMessage($"'Name' is required");

            RuleFor(c => c.Price)
                .NotEmpty()
                .WithMessage($"'Surname' is required");
        }
    }
}