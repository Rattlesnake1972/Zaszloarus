using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using ZaszloArusAPI_EF.Models;

namespace ZaszloArusAPI_EF.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]

        public JsonResult Get()
        {
            List<Product> products = new List<Product>();
            using (var context = new zaszloarusContext())
            {
                try
                {
                    return new JsonResult(context.Products.ToList());
                }
                catch (System.Exception ex)
                {
                    return new JsonResult(ex.Message);
                }
            }
        }

        [HttpGet("{id}")]

        public JsonResult Get(int id)
        {
            using (var context = new zaszloarusContext())
            {
                try
                {
                    Product product = context.Products.Find(id);
                    return new JsonResult(product);
                }
                catch (System.Exception ex)
                {
                    return new JsonResult(ex.Message);
                }
            }
        }

        [HttpPost]

        public JsonResult Post(Product product)
        {
            using (var context = new zaszloarusContext())
            {
                try
                {
                    context.Products.Add(product);
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

        public JsonResult Put(Product product)
        {
            using (var context = new zaszloarusContext())
            {
                try
                {
                    context.Products.Update(product);
                    context.SaveChanges();
                    return new JsonResult("Az adatok módosítása megtörtént");
                }
                catch (Exception ex)
                {
                    return new JsonResult(ex.Message);
                }
            }
        }

        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {
            using (var context = new zaszloarusContext())
            {
                try
                {
                    Product product = new Product();
                    product.Id = id;
                    context.Products.Remove(product);
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
