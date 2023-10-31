/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.blackcode.sicefa.rest;

import com.blackcode.model.Producto;
import come.blackcode.sicefa.core.ControllerProductosCentral;
import com.google.gson.Gson;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

/**
 *
 * @author angel
 */
@Path("productosCentral")
public class RESTProductoCentral {

    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllProducts() {

        ControllerProductosCentral cp = new ControllerProductosCentral();
        List<Producto> productos = null;
        String out = null;
        Gson gson = new Gson();

        try {
            productos = cp.getAlls("");
            out = gson.toJson(productos);
        } catch (Exception e) {
            e.printStackTrace();
            out = "{\"exception\":" + e.toString().replaceAll("\"", "") + "\"}";
        }

        return Response.ok(out).build();
    }
}
