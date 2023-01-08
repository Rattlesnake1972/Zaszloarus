using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZaszloArusAPI_EF.Models;

namespace ZaszloArusAPI_EF.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]

        public JsonResult Get()
        {
            List<User> users = new List<User>();
            using (var context = new zaszloarusContext())
            {
                try
                {
                    return new JsonResult(context.Users.ToList());
                }
                catch (System.Exception ex)
                {
                    return new JsonResult(ex.Message);
                }
            }
        }

        [HttpPost]

        public JsonResult Post(User user)
        {
            using (var context = new zaszloarusContext())
            {
                try
                {
                    context.Users.Add(user);
                    context.SaveChanges();
                    return new JsonResult("Termék felvétele sikeresen megtörtént.");
                }
                catch (Exception ex)
                {
                    return new JsonResult(ex.Message);
                }
            }
        }

        [HttpPut]

        public JsonResult Put(User user)
        {
            using (var context = new zaszloarusContext())
            {
                try
                {
                    context.Users.Update(user);
                    context.SaveChanges();
                    return new JsonResult("Az adatok módosítása megtörtént");
                }
                catch (Exception ex)
                {
                    return new JsonResult(ex.Message);
                }
            }
        }

        [HttpDelete]

        public JsonResult Delete(int id)
        {
            using (var context = new zaszloarusContext())
            {
                try
                {
                    User user = new User();
                    user.Id = id;
                    context.Users.Remove(user);
                    context.SaveChanges();
                    return new JsonResult("Törlés sikeresen megtörtént");
                }
                catch (Exception ex)
                {
                    return new JsonResult(ex.Message);
                }
            }
        }
    }
}
