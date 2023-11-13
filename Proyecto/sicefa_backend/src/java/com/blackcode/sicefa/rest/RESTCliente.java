package com.blackcode.sicefa.rest;

import com.blackcode.sicefa.core.ControllerCliente;
import com.blackcode.sicefa.model.Cliente;
import com.google.gson.Gson;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

/**
 *
 * @author avila
 */

@Path("cliente")
public class RESTCliente {
    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(){
        ControllerCliente cc = new ControllerCliente();
        List<Cliente> clientes = null;
        String out =null;
        Gson gson = new Gson();
        try{
            clientes = cc.getAll("");
            out = gson.toJson(clientes);
        } catch (Exception e){
            e.printStackTrace();
            out = "{\"exception\":" + e.toString().replaceAll("\"","") + "\"}";
        }
        return Response.ok(out).build();
    }
}
