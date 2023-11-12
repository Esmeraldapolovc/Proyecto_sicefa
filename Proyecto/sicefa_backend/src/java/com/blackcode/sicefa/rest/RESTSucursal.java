package com.blackcode.sicefa.rest;

import com.blackcode.model.Sucursal;
import com.google.gson.Gson;
import com.blackcode.sicefa.core.ControllerSucursal;
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
@Path("sucursal")

public class RESTSucursal {

    @Path("save")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    //Por que viene desde el internet: @FormParam
    public Response save(@FormParam("datosSucursal") @DefaultValue("") String datosSucursal) {
        Sucursal su = null;
        ControllerSucursal ce = new ControllerSucursal();
        String out = null;
        Gson gson = new Gson();

        try {
            su = gson.fromJson(datosSucursal, Sucursal.class);

            if (su.getId() < 1) {
                ce.insert(su);
            } else {
                ce.update(su);
            }
            out = """
                {"result":"Datos de empleado gruardados correctamente."}
                """;
        } catch (Exception ex) {
            out = """
                      {"exception":"Ocurrio un error en el servidor. %S"}
                """;
             out = String.format(out, ex.toString().replaceAll("\"", ""));
       
        }

         return Response.ok(out).build();
    }

    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(String filtro) {
        ControllerSucursal ce = new ControllerSucursal();
        List<Sucursal> sucursales = null;
        String out = null;
        Gson gson = new Gson();

        try {
            sucursales = ce.getAll("");
            out = gson.toJson(sucursales);
        } catch (Exception e) {
            e.printStackTrace();
            out = "{\"exception\":" + e.toString().replaceAll("\"", "") + "\"}";
        }
        return Response.ok(out).build();
    }
}
