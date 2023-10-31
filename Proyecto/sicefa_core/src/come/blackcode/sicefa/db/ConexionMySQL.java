package come.blackcode.sicefa.db;
import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author Esme
 */
public class ConexionMySQL {
    
    public Connection open() throws Exception
    {
        
        String user ="root";
        String password = "polo";
      
        String url = "jdbc:mysql://127.0.0.1:3306/sicefa?" +
                     "useSSL=false&" +
                     "allowPublicKeyRetrieval=true&" +
                     "useUnicode=true&" +
                     "characterEncoding=utf-8";
        
        
    Connection conn = null;

    // Primero registramos el Driver JDBC de MySQL:
        Class.forName("com.mysql.cj.jdbc.Driver");
        
        // Abrimos una conexion con MySQL:
        conn = DriverManager.getConnection(url, user, password);
        
        return conn;
    }
}
