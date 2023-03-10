using HahnSoftwareentwicklung.Api.Model.Client;
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
        public ActionResult Post([FromBody] ClientPostRequest client)
        {
            if (client == null)
            {
                return NotFound();
            }

            _clientApplicationService.Add(client);
            return Ok(client);
        }

        [HttpPut]
        public ActionResult Put([FromBody] ClientPutRequest client)
        {
            if (client == null)
            {
                return NotFound();
            }

            _clientApplicationService.Update(client);
            return Ok(client);
        }

        [HttpDelete("id")]
        public ActionResult Delete(int id)
        {
            if (id == 0)
            {
                return NotFound();
            }

            _clientApplicationService.Delete(id);
            return Ok(id);
        }
    }
}