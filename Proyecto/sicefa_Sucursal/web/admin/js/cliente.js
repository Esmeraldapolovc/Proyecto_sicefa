let clientes = [
    {
        "id": 1,
        "fechaRegistro": "12/07/2021",
        "codigoCliente": "JGAG230798HGTV",
        "email": "ggutierrez@gmail.com",
        "estatus": "Activo",

        "persona": {
            "id": 15,
            "nombre": "Joaquin Guadalupe",
            "apellidoPaterno": "Avila",
            "apellidoMaterno": "Gutierrez",
            "genero": "H",
            "fechaNacimiento": "23/07/1978",
            "rfc": "JGAG230798HGTV",
            "curp": "JGAG230798HGTVTDA5",
            "foto": "",
            "domicilio": "San Blas, No.240",
            "cp": "37260",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4771394586"
        }
    },
    {
        "id": 2,
        "fechaRegistro": "15/07/2021",
        "codigoCliente": "IMK030703MGTV",
        "email": "ksofia@gmail.com",
        "estatus": "Activo",

        "persona": {
            "id": 16,
            "nombre": "Karla Sofia",
            "apellidoPaterno": "Arrona",
            "apellidoMaterno": "Matinez",
            "genero": "M",
            "fechaNacimiento": "03/07/2003",
            "rfc": "AIMK030703MGTV",
            "curp": "AIMK030703MGTVDMA3",
            "foto": "",
            "domicilio": "Jalapa, No.196",
            "cp": "37260",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4771334586"
        }
    },
    {
        "id": 3,
        "fechaRegistro": "13/07/2021",
        "codigoCliente": "SEAX171195MGTV",
        "email": "estefania24@gmail.com",
        "estatus": "Activo",

        "persona": {
            "id": 17,
            "nombre": "Sandra Estefania",
            "apellidoPaterno": "Arco",
            "apellidoMaterno": "",
            "genero": "M",
            "fechaNacimiento": "17/11/1995",
            "rfc": "SEAX171195MGTV",
            "curp": "SEAX171195MGTVDMA3",
            "foto": "",
            "domicilio": "San Pedrito, No.314",
            "cp": "37260",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4771334586"
        }
    },
    {
        "id": 4,
        "fechaRegistro": "15/07/2021",
        "codigoCliente": "RFLL241298HGTV",
        "email": "lopezr@outlook.com",
        "estatus": "Inactivo",

        "persona": {
            "id": 18,
            "nombre": "Roman Fernando",
            "apellidoPaterno": "Lopez",
            "apellidoMaterno": "Lopez",
            "genero": "H",
            "fechaNacimiento": "24/12/1998",
            "rfc": "RFLL241298HGTV",
            "curp": "RFLL241298HGTVRC3",
            "foto": "",
            "domicilio": "San Juan Bosco, No.998",
            "cp": "38260",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4771394758"
        }
    },
    {
        "id": 5,
        "fechaRegistro": "12/06/2021",
        "codigoCliente": "RXGG190100HGTV",
        "email": "gonzales19@gmail.com",
        "estatus": "Inactivo",

        "persona": {
            "id": 19,
            "nombre": "Rodrigo",
            "apellidoPaterno": "Gonzalez",
            "apellidoMaterno": "Gonzalez",
            "genero": "H",
            "fechaNacimiento": "19/01/2000",
            "rfc": "RXGG190100HGTV",
            "curp": "RXGG190100HTVNNZ4",
            "foto": "",
            "domicilio": "San Felipe de Jesus, No.2000",
            "cp": "37280",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4773334586"
        }
    }
];

//Inicilizamos la funcion para que funcione en cliente
export function inicializar()
{
    setDetalleClienteVisible(false);
    fillTableCliente();
}

export function saveCliente()
{
    // Declaramos un objeto donde guardaremos los datos del cliente:
    let cliente = null;
    let posicion = -1; // Para saber si un cliente existe o no.
    let idCliente = 0;
    
    // Revisamos si hay un ID de cliente:
    if (document.getElementById("txtIdCliente").value.trim().length > 0)
    {
        idCliente = parseInt(document.getElementById("txtIdCliente").value.trim());
        posicion = buscarPosicionClientePorId(idCliente);
        
        // Si posicion es mayor o igual a 0, si encontramos un cliente:
        if (posicion >= 0)
            cliente = clientes[posicion];
        else
        {
            // Si no hay un cliente con el ID descrito, creamos uuna nueva instancia del Objeto:
            cliente = new Object();
            cliente.id = idCliente;
            
            cliente.persona = new Object();
            cliente.persona.id = parseInt(document.getElementById("txtIdPersona").value.trim());
            
            // Insertamos el objeto cliente dentro del arreglo de clientes:
            clientes.push(cliente);
        }
        
        // Continuamos llenando los datos del objeto:
        // Datos de Persona:
        cliente.persona.nombre = document.getElementById("txtNombre").value;
        cliente.persona.apellidoPaterno = document.getElementById("txtApellidoPaterno").value;
        cliente.persona.apellidoMaterno = document.getElementById("txtApellidoMaterno").value;
        cliente.persona.genero = document.getElementById("cmbGenero").value;
        cliente.persona.fechaNacimiento = document.getElementById("txtFechaNacimiento").value;
        cliente.persona.rfc = document.getElementById("txtRfc").value;
        cliente.persona.curp = document.getElementById("txtCurp").value;
        cliente.persona.domicilio = document.getElementById("txtDomicilio").value;
        cliente.persona.cp = document.getElementById("txtCp").value;
        cliente.persona.ciudad = document.getElementById("txtCiudad").value;
        cliente.persona.estado = document.getElementById("txtEstado").value;
        cliente.persona.telefono = document.getElementById("txtTelefono").value;
        cliente.email = document.getElementById("txtEmail").value;
        
        // Datos del Cliente:
        cliente.codigoCliente = document.getElementById("txtCodigoCliente").value;
        cliente.fechaRegistro = document.getElementById("txtFechaRegistro").value;
        cliente.estatus = document.getElementById("cmbEstatus").value;
        

        // Refrescamos el catalogo de clientes:
        fillTableCliente();
        
        Swal.fire('Movimiento Realizado', 'Los Datos de Clientes Se Actualizaron correctamente.' , 'success');
    }
    else
    {
        Swal.fire('Verificaci&oacute;n de Datos Requerida.',
                  'Debe Agregar un de Clientes (valor num&eacute;rico).',
                  'warning');
    }
}

export function deleteCliente()
{
    let posicion = -1;
    let idCliente = 0;
    
    // Revisamos si hay un ID de empleado:
    if (document.getElementById("txtIdCliente").value.trim().length > 0)
    {
        // Recuperamos el ID de Clientes que deseamos eliminar:
        idCliente = parseInt(document.getElementById("txtIdCliente").value.trim());
        
        // Buscamos la posicion del cliente con ese ID:
        posicion = buscarPosicionClientePorId(idCliente);
        
        // Si la posicion del Cliente existe, lo quitamos del arreglo:
        if (posicion >= 0)
        {
            clientes.splice(posicion, 1);
            Swal.fire('Movimiento realizado.', 'Registro del Cliente se Elimino.', 'success');
            
            fillTableCliente();
        }
        else
        {
            Swal.fire('', 'El ID del Cliente Especificado no existe.', 'warning');
        }
    }
    else
    {
        Swal.fire('', 'Especifique un ID de Cliente.', 'warning');
    }
}

//Llena la tabla de empleados con el arreglo.
function fillTableCliente()
{
    //Aqui vamos a ir guardando el contenido del tbosy de la tabla de clientes:
    let contenido = '';
    
    //Recorremos el arreglo elemento por elemento:
    for (let i = 0; i < clientes.length; i++)
    {
        contenido +=    '<tr>' +
                            '<td>' + clientes[i].codigoCliente + '</td>' +
                            '<td>' +
                                clientes[i].persona.nombre + ' ' +
                                clientes[i].persona.apellidoPaterno + ' ' +
                                clientes[i].persona.apellidoMaterno +
                            '</td>' +
                            '<td>' + clientes[i].persona.curp + '</td>' +
                            '<td>' + clientes[i].email + '</td>' +
                            '<td>' + clientes[i].persona.telefono + '</td>' +
                            '<td>' + clientes[i].fechaRegistro + '</td>' +
                            '<td>' + 
                                '<a href="#" class="text-info" onclick="cm.cargarDetalleCliente(' + i + ');"><i class="fa fa-circle-info"></i></a>' +
                            '</td>' +
                        '</tr>';
    }
    
    document.getElementById("tbodyCliente").innerHTML = contenido;
}

export function getCliente()
{

}

export function cargarDetalleCliente(posicion)
{
    //Recuperamos el Empleado en la posicion indicada:
    let cliente = clientes[posicion];
    
    // LLenamos las cajas de texto y demas controles con los datos del empleado que recuperamos previamente:
    document.getElementById("txtIdCliente").value = cliente.id;
    document.getElementById("txtIdPersona").value = cliente.persona.id;
    
    // Datos de Persona:
    document.getElementById("txtNombre").value = cliente.persona.nombre;
    document.getElementById("txtApellidoPaterno").value = cliente.persona.apellidoPaterno;
    document.getElementById("txtApellidoMaterno").value = cliente.persona.apellidoMaterno;
    document.getElementById("cmbGenero").value = cliente.persona.genero;
    document.getElementById("txtFechaNacimiento").value = cliente.persona.fechaNacimiento;
    document.getElementById("txtRfc").value = cliente.persona.rfc;
    document.getElementById("txtCurp").value = cliente.persona.curp;
    document.getElementById("txtDomicilio").value = cliente.persona.domicilio;
    document.getElementById("txtCp").value = cliente.persona.cp;
    document.getElementById("txtCiudad").value = cliente.persona.ciudad;
    document.getElementById("txtEstado").value = cliente.persona.estado;
    document.getElementById("txtTelefono").value = cliente.persona.telefono;
    
    // Datos del Cliente:
    document.getElementById("txtCodigoCliente").value = cliente.codigoCliente;
    document.getElementById("txtEmail").value = cliente.email;
    document.getElementById("txtFechaRegistro").value = cliente.fechaRegistro;
    document.getElementById("cmbEstatus").value = cliente.estatus;
    
    setDetalleClienteVisible(true);
}

export function clearForm()
{
    document.getElementById("txtIdCliente").value = '';
    document.getElementById("txtIdPersona").value = '';
    
    // Datos de Persona:
    document.getElementById("txtNombre").value = '';
    document.getElementById("txtApellidoPaterno").value = '';
    document.getElementById("txtApellidoMaterno").value = '';
    document.getElementById("cmbGenero").value = '';
    document.getElementById("txtFechaNacimiento").value = '';
    document.getElementById("txtRfc").value = '';
    document.getElementById("txtCurp").value = '';
    document.getElementById("txtDomicilio").value = '';
    document.getElementById("txtCp").value = '';
    document.getElementById("txtCiudad").value = '';
    document.getElementById("txtEstado").value = '';
    document.getElementById("txtTelefono").value = '';
    
    // Datos del Cliente:
    document.getElementById("txtCodigoCliente").value = '';
    document.getElementById("txtEmail").value = '';
    document.getElementById("txtFechaRegistro").value = ''; 
    document.getElementById("cmbEstatus").value = '';
    
}

// Busca la posicion de un objeto empleado con base en la propiedad ID y la devuelve.
// Si no se encuentra el ID buscado, el metodo devuelve -1.
function buscarPosicionClientePorId(id)
{
    for (let i = 0; i < clientes.length; i++)
    {
        if (clientes[i].id === id)
            return i;
    }
    return -1;
}

export function setDetalleClienteVisible(valor)
{
    if (valor === true)
    {
        //Ocultamos la seccion de catalogo de Clientes:
        document.getElementById('divCatalogoCliente').style.display = 'none';

        //Mostramos la seccion del detalle:
        document.getElementById('divDetalleCliente').style.display = '';
    } else
    {
        //Ocultamos la seccion de detalles de Cliente:
        document.getElementById('divDetalleCliente').style.display = 'none';

        //Mostramos la seccion de Catalogo de Clientes:
        document.getElementById('divCatalogoCliente').style.display = '';
    }
}

export function clearAndShowDetalleCliente()
{
    clearForm();
    setDetalleClienteVisible(true);
}