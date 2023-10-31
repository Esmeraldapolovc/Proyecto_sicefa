
package com.blackcode.sicefa.rest;

import com.blackcode.model.Sucursal;
import com.google.gson.Gson;
import come.blackcode.sicefa.core.ControllerSucursal;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

/**
 *
 * @author Esme
 */
@Path("sucursal")

public class RESTSucursal {
    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(){
        ControllerSucursal ce= new ControllerSucursal();
        List<Sucursal>   sucursales = null;
        String out=null;
        Gson gson = new Gson();
        
        try{
            sucursales = ce.getAll("");
            out = gson.toJson(  sucursales);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            out="{\"exception\":" + e.toString().replaceAll("\"", "")+"\"}";
        }
        return Response.ok(out).build();
    }
}

