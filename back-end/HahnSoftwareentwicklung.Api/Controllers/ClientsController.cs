using HahnSoftwareentwicklung.Api.Model.Client;
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
        public ActionResult<IEnumerable<ClientDto>> Get()
        {
            try
            {
                return Ok(_clientApplicationService.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("id")]
        public ActionResult<ClientDto> Get(int id)
        {
            try
            {
                if (id == 0)
                    return NotFound();

                return Ok(_clientApplicationService.Get(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        public ActionResult Post([FromBody] ClientPostRequest client)
        {
            try
            {
                if (client == null)
                    return NotFound();

                _clientApplicationService.Add(client);
                return Ok(client);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]
        public ActionResult Put([FromBody] ClientPutRequest client)
        {
            try
            {
                if (client == null)
                    return NotFound();

                _clientApplicationService.Update(client);
                return Ok(client);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("id")]
        public ActionResult Delete(int id)
        {
            try
            {
                if (id == 0)
                    return NotFound();

                _clientApplicationService.Delete(id);
                return Ok(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}