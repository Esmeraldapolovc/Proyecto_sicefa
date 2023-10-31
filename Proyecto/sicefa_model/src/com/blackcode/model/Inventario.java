package com.blackcode.model;

public class Inventario {

    int idInventario;

    Producto producto;
    Sucursal sucursal;

    public Inventario() {
    }

    ////////    GETTER    ////////
    public int getIdInventario() {
        return idInventario;
    }

    public Producto getProducto() {
        return producto;
    }

    public Sucursal getSucursal() {
        return sucursal;
    }

    ////////    SETTER    ////////
    public void setIdInventario(int idInventario) {
        this.idInventario = idInventario;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public void setSucursal(Sucursal sucursal) {
        this.sucursal = sucursal;
    }

}
