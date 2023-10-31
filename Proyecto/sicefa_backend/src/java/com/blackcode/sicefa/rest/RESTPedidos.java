/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.blackcode.sicefa.rest;

import com.blackcode.core.controllerPedidos;
import com.blackcode.model.Pedidos;
import com.google.gson.Gson;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;


    @Path("pedidos")
    
public class RESTPedidos {

    @Path("getAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllProducts() {

        controllerPedidos pe = new controllerPedidos();
        List<Pedidos> pedidos = null;
        String out = null;
        Gson gson = new Gson();

        try {
            pedidos = pe.getAll("");
            out = gson.toJson(pedidos);
        }
        catch (Exception e) {
            e.printStackTrace();
            out = "{\"exception\":" + e.toString().replaceAll("\"", "") + "\"}";
        }
        return Response.ok(out).build();
    }
}

