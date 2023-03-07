using HahnSoftwareentwicklung.Application.Dtos;
using HahnSoftwareentwicklung.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HahnSoftwareentwicklung.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ClientsController : Controller
    {
        private readonly IClientApplicationService _clientApplicationService;

        public ClientsController(IClientApplicationService clientApplicationService)
        {
            _clientApplicationService = clientApplicationService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(_clientApplicationService.GetAll());
        }

        [HttpGet("id")]
        public ActionResult<string> Get(int id)
        {
            return Ok(_clientApplicationService.Get(id));
        }

        [HttpPost]
        public ActionResult Post([FromBody] ClientDto clientDto)
        {
            if (clientDto == null)
            {
                return NotFound();
            }

            _clientApplicationService.Add(clientDto);

            return Ok("Client registered successfully!");
        }

        [HttpPut]
        public ActionResult Put([FromBody] ClientDto clientDto)
        {
            if (clientDto == null)
            {
                return NotFound();
            }

            _clientApplicationService.Update(clientDto);

            return Ok("Client updated successfully!");
        }

        [HttpDelete()]
        public ActionResult Delete([FromBody] ClientDto clientDto)
        {
            if (clientDto == null)
            {
                return NotFound();
            }

            _clientApplicationService.Delete(clientDto);
            return Ok("Client deleted successfully!");
        }
    }
}