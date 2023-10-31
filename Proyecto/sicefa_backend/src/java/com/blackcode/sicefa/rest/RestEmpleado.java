
package com.blackcode.sicefa.rest;

import com.blackcode.model.Empleado;
import com.google.gson.Gson;
import come.blackcode.sicefa.core.ControllerEmpleado;
import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

/**
 *
 * @author Esme
 */
@Path("empleado")
public class RestEmpleado {
    @Path("save")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
                       //Por que viene desde el internet: @FormParam
   public Response save(@FormParam("datosEmpleados")  @DefaultValue("")String datosEmpleado){
       
       Empleado emp = null;
       ControllerEmpleado ce = new ControllerEmpleado();
       String out= null;
       Gson gson = new Gson();
       
       try{
           emp = gson.fromJson(datosEmpleado, Empleado.class);
           if(emp.getId() < 1){
               ce.insert(emp);
           }
           else{
               ce.update(emp);
           }
           out= """
                {"result":"Datos de empleado gruardados correctamente."}
                """;
       }
       catch(Exception ex)
       {
           out= """
                {"exception":"Ocirrio un error en el servidor. %s"}
        
                """;
           
           out = String.format(out, ex.toString().replaceAll("\"", ""));
       }
       
       return Response.ok(out).build();
   }
   
   
    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(){
        ControllerEmpleado ce= new ControllerEmpleado();
        List<Empleado> empleados = null;
        String out=null;
        Gson gson = new Gson();
        
        try{
            empleados = ce.getAll("");
            out = gson.toJson(empleados);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            out="{\"exception\":" + e.toString().replaceAll("\"", "")+"\"}";
        }
        return Response.ok(out).build();
    }
    
    
}
