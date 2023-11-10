/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.blackcode.model;

/**
 *
 * @author Rosario
 */
public class Pedidos {
   int idPedido; 
int idCliente;
int idEmpleado;
String fechapedido;
String fecharequerida; 
String fechaenvio;
int idMedioEnvio;
int peso; 
String nombredestinatario; 
String direcciondestinatario;
String ciudaddestinatario; 
String regiondestinatario;
int codigopostaldestinatario; 
String paisdestinatario;

    public int getIdPedido() {
        return idPedido;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public int getIdEmpleado() {
        return idEmpleado;
    }

    public String getFechapedido() {
        return fechapedido;
    }

    public String getFecharequerida() {
        return fecharequerida;
    }

    public String getFechaenvio() {
        return fechaenvio;
    }

    public int getIdMedioEnvio() {
        return idMedioEnvio;
    }

    public int getPeso() {
        return peso;
    }

    public String getNombredestinatario() {
        return nombredestinatario;
    }

    public String getDirecciondestinatario() {
        return direcciondestinatario;
    }

    public String getCiudaddestinatario() {
        return ciudaddestinatario;
    }

    public String getRegiondestinatario() {
        return regiondestinatario;
    }

    public int getCodigopostaldestinatario() {
        return codigopostaldestinatario;
    }

    public String getPaisdestinatario() {
        return paisdestinatario;
    }

    public void setIdPedido(int idPedido) {
        this.idPedido = idPedido;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public void setIdEmpleado(int idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public void setFechapedido(String fechapedido) {
        this.fechapedido = fechapedido;
    }

    public void setFecharequerida(String fecharequerida) {
        this.fecharequerida = fecharequerida;
    }

    public void setFechaenvio(String fechaenvio) {
        this.fechaenvio = fechaenvio;
    }

    public void setIdMedioEnvio(int idMedioEnvio) {
        this.idMedioEnvio = idMedioEnvio;
    }

    public void setPeso(int peso) {
        this.peso = peso;
    }

    public void setNombredestinatario(String nombredestinatario) {
        this.nombredestinatario = nombredestinatario;
    }

    public void setDirecciondestinatario(String direcciondestinatario) {
        this.direcciondestinatario = direcciondestinatario;
    }

    public void setCiudaddestinatario(String ciudaddestinatario) {
        this.ciudaddestinatario = ciudaddestinatario;
    }

    public void setRegiondestinatario(String regiondestinatario) {
        this.regiondestinatario = regiondestinatario;
    }

    public void setCodigopostaldestinatario(int codigopostaldestinatario) {
        this.codigopostaldestinatario = codigopostaldestinatario;
    }

    public void setPaisdestinatario(String paisdestinatario) {
        this.paisdestinatario = paisdestinatario;
    }


}

