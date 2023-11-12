package come.blackcode.sicefa.core;

import come.blackcode.sicefa.db.ConexionMySQL;
import com.blackcode.model.Inventario;
import com.blackcode.model.Producto;
import com.blackcode.model.Sucursal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ControllerInventario {
    public List<Inventario> getAll(String filtro) throws Exception {
        String sql = "SELECT * FROM v_inventario";
        ConexionMySQL connMySQL = new ConexionMySQL();
        PreparedStatement pstmt;
        List<Inventario> inventarios;
        try (Connection conn = connMySQL.open()) {
            pstmt = conn.prepareStatement(sql);
            ResultSet rs = pstmt.executeQuery();
            inventarios = new ArrayList<>();
            while (rs.next()) {
                Inventario inv = fill(rs);
                inventarios.add(inv);
            }
            rs.close();
        }
        pstmt.close();

        return inventarios;
    }

    private Inventario fill(ResultSet rs) throws Exception {
        Inventario i = new Inventario();
        Producto p = new Producto();
        Sucursal s = new Sucursal();

        //  Se obtienen los datos de inventario en el ResultSet
        i.setIdInventario(rs.getInt("idInventario"));

        //   Se obtienen los datos de Producto en el ResultSet
        p.setIdProducto(rs.getInt("idProducto"));
        p.setNombre(rs.getString("nombreProducto"));
        p.setNombreGenerico(rs.getString("nombreGenerico"));
        p.setFormaFarmaceutica(rs.getString("formaFarmaceutica"));
        p.setUnidadMedida(rs.getString("unidadMedida"));
        p.setPresentacion(rs.getString("presentacion"));
        p.setPrincipalIndicacion(rs.getString("principalIndicacion"));
        p.setContraindicaciones(rs.getString("contraindicaciones"));
        p.setConcentracion(rs.getString("concentracion"));
        p.setUnidadesEnvase(rs.getInt("unidadesEnvase"));
        p.setPrecioCompra(rs.getFloat("precioCompra"));
        p.setPrecioVenta(rs.getFloat("precioVenta"));

        //   Se obtienen los datos de Sucursal en el ResultSet
        s.setId(rs.getInt("idSucursal"));
        s.setNombre(rs.getString("nombreSucursal"));
        s.setTitular(rs.getString("titular"));
        s.setRfc(rs.getString("rfc_Sucursal"));
        s.setDomicilio(rs.getString("domicilio_sucursal"));
        s.setColonia(rs.getString("colonia_sucursal"));
        s.setCiudad(rs.getString("ciudad_sucursal"));
        s.setEstado(rs.getString("estado_sucursal"));
        s.setTelefono(rs.getString("telefono_sucursal"));
        s.setLatitud(rs.getString("latitud"));
        s.setLongitud(rs.getString("longitud"));
        s.setEstatus(rs.getInt("estatus_sucursal"));

        i.setProducto(p);
        i.setSucursal(s);

        return i;
    }
}
