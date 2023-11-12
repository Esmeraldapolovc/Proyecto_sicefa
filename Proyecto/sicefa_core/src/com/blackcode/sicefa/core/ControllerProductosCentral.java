/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.blackcode.sicefa.core;

import com.blackcode.model.Producto;
import come.blackcode.sicefa.db.ConexionMySQL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author angel
 */
public class ControllerProductosCentral {
//    PARA MOSTRA LA VISTA DEL PRODUCTO
        public List<Producto> getAlls(String filtro) throws Exception {
        String sql = "SELECT * FROM v_productos";  // Ajusta la tabla y las columnas según tu base de datos
        ConexionMySQL connMySQL = new ConexionMySQL();
        Connection conn = connMySQL.open();
        PreparedStatement pstmt = conn.prepareStatement(sql);
        ResultSet rs = pstmt.executeQuery();
        List<Producto> productos = new ArrayList<>();
        
        while (rs.next()) {
            Producto producto = fill(rs); // Llama a un método fill para crear un objeto Producto a partir de los resultados
            productos.add(producto);
        }
        
        rs.close();
        conn.close();
        pstmt.close();
        
        return productos;
    }
        private Producto fill(ResultSet rs) throws Exception {
        Producto producto = new Producto();

        // Aquí ajusta las asignaciones de propiedades según tu estructura de base de datos
        producto.setIdProducto(rs.getInt("idProducto"));
        producto.setNombre(rs.getString("nombre"));
        producto.setNombreGenerico(rs.getString("nombreGenerico"));
        producto.setFormaFarmaceutica(rs.getString("formaFarmaceutica"));
        producto.setUnidadMedida(rs.getString("unidadMedida"));
        producto.setPresentacion(rs.getString("presentacion"));
        producto.setPrincipalIndicacion(rs.getString("principalIndicacion"));
        producto.setContraindicaciones(rs.getString("contraindicaciones"));
        producto.setConcentracion(rs.getString("concentracion"));
        producto.setUnidadesEnvase(rs.getInt("unidadesEnvase"));
        producto.setPrecioCompra(rs.getFloat("precioCompra"));
        producto.setPrecioVenta(rs.getFloat("precioVenta"));
        producto.setFoto(rs.getString("foto"));
        producto.setRutaFoto(rs.getString("rutaFoto"));
        producto.setCodigoBarras(rs.getString("codigoBarras"));
        producto.setEstatus(rs.getInt("estatus"));

        return producto;
    }
//        PARA ACTUALIZA EL PRODUCTO
        public void update(Producto pr) throws Exception {
 String sql = "UPDATE productos SET nombre = ?,"
         +"nombreGenerico = ?,"
         +"formaFarmaceutica = ?,"
         +"unidadMedida = ?, "
         +"presentacion = ?,"
         +"principalIndicacion = ?,"
         +"contraindicaciones = ?,"
         +"concentracion = ?, " 
         +"unidadesEnvase = ?,"
         +"precioCompra = ?,"
         +"precioVenta = ?,"
         +"foto = ?,"
         +"rutaFoto = ?, " 
         +"codigoBarras = ?,"
         +"estatus = ? WHERE idProducto = ?";

        ConexionMySQL connMySQL = new ConexionMySQL();
        Connection conn = connMySQL.open();
        PreparedStatement pstmt = conn.prepareStatement(sql);

        pstmt.setString(1, pr.getNombre());
        pstmt.setString(2, pr.getNombreGenerico());
        pstmt.setString(3, pr.getFormaFarmaceutica());
        pstmt.setString(4, pr.getUnidadMedida());
        pstmt.setString(5, pr.getPresentacion());
        pstmt.setString(6, pr.getPrincipalIndicacion());
        pstmt.setString(7, pr.getContraindicaciones());
        pstmt.setString(8, pr.getConcentracion());
        pstmt.setInt(9, pr.getUnidadesEnvase());
        pstmt.setFloat(10, pr.getPrecioCompra());
        pstmt.setFloat(11, pr.getPrecioVenta());
        pstmt.setString(12, pr.getFoto());
        pstmt.setString(13, pr.getRutaFoto());
        pstmt.setString(14, pr.getCodigoBarras());
        pstmt.setInt(15, pr.getEstatus());
        pstmt.setInt(16, pr.getIdProducto());

        pstmt.executeUpdate();
        pstmt.close();
        conn.close();
    }
//        PARA ELIMINAR EL PRODUCTO DE MANERA LOGICA
    public void delete(int id) throws Exception {
        String sql = "UPDATE productos SET estatus = 0 WHERE idProducto = ?";
        ConexionMySQL connMySQL = new ConexionMySQL();
        Connection conn = connMySQL.open();
        PreparedStatement pstmt = conn.prepareStatement(sql);
        pstmt.setInt(1, id);
        pstmt.executeUpdate();
        pstmt.close();
        conn.close();
    }
}
