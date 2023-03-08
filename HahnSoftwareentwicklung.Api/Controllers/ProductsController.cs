using HahnSoftwareentwicklung.Application.Dtos;
using HahnSoftwareentwicklung.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HahnSoftwareentwicklung.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : Controller
    {
        private readonly IProductApplicationService _productApplicationService;

        public ProductsController(IProductApplicationService productApplicationService)
        {
            _productApplicationService = productApplicationService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(_productApplicationService.GetAll());
        }

        [HttpGet("id")]
        public ActionResult<string> Get(int id)
        {
            return Ok(_productApplicationService.Get(id));
        }

        [HttpPost]
        public ActionResult Post([FromBody] ProductDto productDto)
        {
            if (productDto == null)
            {
                return NotFound();
            }

            _productApplicationService.Add(productDto);

            return Ok("Product registered successfully!");
        }

        [HttpPut]
        public ActionResult Put([FromBody] ProductDto productDto)
        {
            if (productDto == null)
            {
                return NotFound();
            }

            _productApplicationService.Update(productDto);

            return Ok("Product updated successfully!");
        }

        [HttpDelete()]
        public ActionResult Delete([FromBody] ProductDto productDto)
        {
            if (productDto == null)
            {
                return NotFound();
            }

            _productApplicationService.Delete(productDto);
            return Ok("Product deleted successfully!");
        }
    }
}