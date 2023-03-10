using HahnSoftwareentwicklung.Api.Model.Product;
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
        public ActionResult<IEnumerable<ProductDto>> Get()
        {
            return Ok(_productApplicationService.GetAll());
        }

        [HttpGet("id")]
        public ActionResult<ProductDto> Get(int id)
        {
            if (id == 0)
                return NotFound();

            return Ok(_productApplicationService.Get(id));
        }

        [HttpPost]
        public ActionResult Post([FromBody] ProductPostRequest product)
        {
            if (product == null)
                return NotFound();

            _productApplicationService.Add(product);
            return Ok(product);
        }

        [HttpPut]
        public ActionResult Put([FromBody] ProductPutRequest product)
        {
            if (product == null)
                return NotFound();

            _productApplicationService.Update(product);
            return Ok(product);
        }

        [HttpDelete("id")]
        public ActionResult Delete(int id)
        {
            if (id == 0)
                return NotFound();

            _productApplicationService.Delete(id);
            return Ok(id);
        }
    }
}