package com.blackcode.sicefa.core;

import com.blackcode.model.Empleado;
import com.blackcode.model.Persona;
import java.sql.ResultSet;
import com.blackcode.model.Sucursal;
import com.blackcode.model.Usuario;
import java.sql.Connection;
import come.blackcode.sicefa.db.ConexionMySQL;
import java.sql.CallableStatement;
import java.sql.Types;
import java.util.List;
import java.sql.PreparedStatement;
import java.util.ArrayList;

/**
 *
 * @author Esme
 */
public class ControllerSucursal {

    public int insert(Sucursal s) throws Exception {
        //1. Definicion de la colsulta SQL que deseamos ejecutar
        String sql = """
                     call insertarSucursal( ?,?,?,?,?,?,?,?,?,?,?,
                                            ?,?,?,?,?,?,?)
                     """;
        //2.-Abrimos una conexion con base de datos 
        ConexionMySQL connMySQL = new ConexionMySQL();
        Connection conn = connMySQL.open();

        //3.- Generamos un objeto de tipo CallableStatemnt:
        CallableStatement cstmt = conn.prepareCall(sql);

        //4.- creamos una bariable auxiliar dende guardemos el Id que se va a generar
        int idSucursalGenerado = 0;
        int idEmpleadoGenerado = 0;
        int idUsuarioGenerado = 0;
        int idPersonaGenerado = 0;
        String codigoEmpleadoGenerado = "";
        String nombreUsuarioGenerado = " ";
        String contraseniaGenerada = " ";
        //5.- Declaremos un ResultSet:
        ResultSet rs = null;
        //6.- Llenamos el CallebleStatement con los valores que se enviaran a la
        // Stored Procedure

        cstmt.setString(1, s.getNombre());
        cstmt.setString(2, s.getTitular());
        cstmt.setString(3, s.getRfc());
        cstmt.setString(4, s.getDomicilio());
        cstmt.setString(5, s.getColonia());
        cstmt.setString(6, s.getCodigoPostal());
        cstmt.setString(7, s.getCiudad());
        cstmt.setString(8, s.getEstado());
        cstmt.setString(9, s.getTelefono());
        cstmt.setString(10, s.getLatitud());
        cstmt.setString(11, s.getLongitud());

        //Registramos los parametros de salida
        cstmt.registerOutParameter(12, Types.INTEGER);
        cstmt.registerOutParameter(13, Types.INTEGER);
        cstmt.registerOutParameter(14, Types.INTEGER);
        cstmt.registerOutParameter(15, Types.INTEGER);
        cstmt.registerOutParameter(16, Types.VARCHAR);
        cstmt.registerOutParameter(17, Types.VARCHAR);
        cstmt.registerOutParameter(18, Types.VARCHAR);

        //Ejecutamos el stored Procedure
        cstmt.executeUpdate();

        //Recuperemos los valores de retorno:
        idSucursalGenerado = cstmt.getInt(12);
        idPersonaGenerado = cstmt.getInt(13);
        idUsuarioGenerado = cstmt.getInt(14);
        idEmpleadoGenerado = cstmt.getInt(15);
        codigoEmpleadoGenerado = cstmt.getString(16);
        nombreUsuarioGenerado = cstmt.getString(17);
        contraseniaGenerada = cstmt.getString(18);

        //Colocamos los valores retornados dentro del objeto de tipo sucursal
        s.setId(idSucursalGenerado);
        s.getPersona().setId(idPersonaGenerado);
        s.getUsuario().setId(idUsuarioGenerado);
        s.getEmpleado().setId(idEmpleadoGenerado);
        s.getEmpleado().setCodigo(codigoEmpleadoGenerado);
        s.getUsuario().setNombreUsuario(nombreUsuarioGenerado);
        s.getUsuario().setContrasenia(contraseniaGenerada);

        //cerramos todos nuestros objetos de BD
        cstmt.close();
        conn.close();

        //Devolvemos el iD de Sucursal que se genero
        return idSucursalGenerado;
    }

    public void update(Sucursal s) throws Exception {
        String sql= """
                    call actualizarSucursal(?,?,?,?,?
                                            ?,?,?,?,?
                                            ?,?,?)
                    """
            ;
        
         //2.-Abrimos una conexion con base de datos 
        ConexionMySQL connMySQL = new ConexionMySQL();
        Connection conn = connMySQL.open();

        //3.- Generamos un objeto de tipo CallableStatemnt:
        CallableStatement cstmt = conn.prepareCall(sql);
         //Llenamos el CallebleStatement con los valores que se enviaran a la
        // Stored Procedure
          cstmt.setInt(1, s.getId());
          cstmt.setString(2, s.getNombre());
          cstmt.setString(3, s.getTitular());
          cstmt.setString(4, s.getRfc());
          cstmt.setString(5, s.getDomicilio());
          cstmt.setString(6, s.getColonia());
          cstmt.setString(7, s.getCodigoPostal());
          cstmt.setString(8, s.getCiudad());
          cstmt.setString(9, s.getEstado());
          cstmt.setString(10, s.getTelefono());
          cstmt.setString(11, s.getLatitud());
          cstmt.setString(12, s.getLongitud());
          cstmt.setInt(13, s.getEstatus());
          
          //Ejecutamos el stored Procedure
          cstmt.executeUpdate();
          
          //Serramos todos los objetos de BD
          cstmt.close();
          conn.close();
          
       
    }

    public void delete(int id) throws Exception {
        String sql = "UPDATE sucursal SET activo = 0 WHERE idSucursal=?";

        ConexionMySQL connMySQL = new ConexionMySQL();
        Connection conn = connMySQL.open();
        PreparedStatement pstmt = conn.prepareStatement(sql);
        pstmt.setInt(1, id);
        
        pstmt.executeUpdate();
        
        //Cerramos todos nuestros objetos de BD
        pstmt.close();
        conn.close();
    }

      public Sucursal finByid(int id) throws Exception {

        return null;
    }

    public List<Sucursal> getAll(String filtro) throws Exception {
       //Conuslta 
       
       String sql = "SELECT * FROM v_sucursal";
       ConexionMySQL connMySQL = new ConexionMySQL();
       Connection conn = connMySQL.open();
       PreparedStatement pstmt = conn.prepareStatement(sql);
       ResultSet rs = pstmt.executeQuery();
       //import java.util.list
       ArrayList<Sucursal> sucursales = new ArrayList<>();
       
       while(rs.next()){
           
           Sucursal scl = fill(rs);
           sucursales.add(scl);
       }
       
       //Cerramos todos los objetos de BD
       
       rs.close();
       pstmt.close();
       conn.close();
       
       return sucursales;
    }
    
    private Sucursal fill(ResultSet rs) throws Exception{
        Sucursal s= new Sucursal();
       
        
        s.setId(rs.getInt("idSucursal"));
        s.setNombre(rs.getString("nombre"));
        s.setTitular(rs.getString("titular"));
        s.setRfc(rs.getString("rfc"));
        s.setDomicilio(rs.getString("domicilio"));
        s.setColonia(rs.getString("colonia"));
        s.setCodigoPostal(rs.getString("codigoPostal"));
        s.setCiudad(rs.getString("ciudad"));
        s.setEstado(rs.getString("estado"));
        s.setTelefono(rs.getString("telefono"));
        s.setLatitud(rs.getString("latitud")); // Mantener el mismo nombre de columna
        s.setLongitud(rs.getString("longitud"));
        s.setEstatus(rs.getInt("estatus"));
        
       
        return s;
        
    }
}
