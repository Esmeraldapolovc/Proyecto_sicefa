package com.blackcode.model;

public class Producto {

    int idProducto;
    String nombre;
    String nombreGenerico;
    String formaFarmaceutica;
    String unidadMedida;
    String presentacion;
    String principalIndicacion;
    String contraindicaciones;
    String concentracion;
    int unidadesEnvase;
    float precioCompra;
    float precioVenta;
    String foto;
    String rutaFoto;
    String codigoBarras;
    int estatus;

    public Producto() {
    }

    ////////    GETTER    ////////
    public int getIdProducto() {
        return idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public String getNombreGenerico() {
        return nombreGenerico;
    }

    public String getFormaFarmaceutica() {
        return formaFarmaceutica;
    }

    public String getUnidadMedida() {
        return unidadMedida;
    }

    public String getPresentacion() {
        return presentacion;
    }

    public String getPrincipalIndicacion() {
        return principalIndicacion;
    }

   

    public String getConcentracion() {
        return concentracion;
    }

    public int getUnidadesEnvase() {
        return unidadesEnvase;
    }

    public float getPrecioCompra() {
        return precioCompra;
    }

    public float getPrecioVenta() {
        return precioVenta;
    }

    public String getFoto() {
        return foto;
    }

    public String getRutaFoto() {
        return rutaFoto;
    }

    public String getCodigoBarras() {
        return codigoBarras;
    }

    public int getEstatus() {
        return estatus;
    }

    ////////    SETTER    ////////
    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setNombreGenerico(String nombreGenerico) {
        this.nombreGenerico = nombreGenerico;
    }

    public void setFormaFarmaceutica(String formaFarmaceutica) {
        this.formaFarmaceutica = formaFarmaceutica;
    }

    public void setUnidadMedida(String unidadMedida) {
        this.unidadMedida = unidadMedida;
    }

    public void setPresentacion(String presentacion) {
        this.presentacion = presentacion;
    }

    public void setPrincipalIndicacion(String principalIndicacion) {
        this.principalIndicacion = principalIndicacion;
    }

    public String getContraindicaciones() {
        return contraindicaciones;
    }

    public void setContraindicaciones(String contraindicaciones) {
        this.contraindicaciones = contraindicaciones;
    }

    

    public void setConcentracion(String concentracion) {
        this.concentracion = concentracion;
    }

    public void setUnidadesEnvase(int unidadesEnvase) {
        this.unidadesEnvase = unidadesEnvase;
    }

    public void setPrecioCompra(float precioCompra) {
        this.precioCompra = precioCompra;
    }

    public void setPrecioVenta(float precioVenta) {
        this.precioVenta = precioVenta;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public void setRutaFoto(String rutaFoto) {
        this.rutaFoto = rutaFoto;
    }

    public void setCodigoBarras(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    public void setEstatus(int estatus) {
        this.estatus = estatus;
    }
}
