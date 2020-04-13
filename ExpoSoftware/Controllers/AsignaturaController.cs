using System.Collections.Generic;
using System.Linq;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ExpoSoftware.Models;


namespace ExpoSoftware.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AsignaturaController : ControllerBase
    {

        private readonly AsignaturaService _AsignaturaService;
        public IConfiguration Configuration { get; }

        public AsignaturaController(IConfiguration configuration)
        {
            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            _AsignaturaService = new AsignaturaService(connectionString);
        }

         [HttpPost]
        public ActionResult<AsignaturaViewModel> Post(AsignaturaInputModel asignaturaInput)
        {
            
            Asignatura asignatura = Mapear(asignaturaInput);
            var response = _AsignaturaService.Guardar(asignatura);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Asignatura);
        }

        
        private Asignatura Mapear(AsignaturaInputModel asignaturaInput)
        {
            var asignatura = new Asignatura
            {
                CodigoAsignatura = asignaturaInput.CodigoAsignatura,
                NombreAsignatura = asignaturaInput.NombreAsignatura,
                AreaAsignatura = asignaturaInput.AreaAsignatura,
                DescripcionAsignatura=asignaturaInput.DescripcionAsignatura
            };
            return asignatura;
        }
        

    }
}