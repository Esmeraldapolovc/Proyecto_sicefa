let empleados = [
    {
        "id": 2,
        "clave": "7wdwdw",
        "email": "tovardiazjuana@gmail",
        "fechaContratacion": "15/06/2029",
        "puesto": "administrador",
        "salarioBruto": 11370.00,
        "estatus": 1,

        "persona": {
            "id": 45,
            "nombre": "polo",
            "apellidopaterno": "Tovar",
            "apellidoMaterno": "Diaz",
            "genero": "H",
            "rfc": "3hhdehdedhwe",
            "curp": "4d46484reref",
            "fechadenacimiento": "15 / 10 / 2029",
            "foto": "",
            "domicilio": "provada los pinos no.10",
            "codigoPostal": "3427",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4721228360"
        },
        "usuario": {
            "id": 7,
            "nombreUsuario": "gmail",
            "contrasenia": "utlsecret#",
            "rol": "ADMS"
        }
    },
    {
        "id": 8,
        "clave": "76334",
        "email": "tovardiazjuana@gmail",
        "fechaContratacion": "5/9/2029",
        "puesto": "Empleado",
        "salarioBruto": 1000.00,
        "estatus": 1,
        "persona": {
            "id": 98,
            "nombre": "Giovani",
            "apellidopaterno": "Diaz",
            "apellidoMaterno": "Martinez",
            "genero": "M",
            "rfc": "3hhdehdedhwe",
            "curp": "4d46484reref",
            "fechadenacimiento": "15 / 10 / 2029",
            "foto": "",
            "domicilio": "provada los pinos no.10",
            "codigoPostal": "3427",
            "ciudad": "Leon",
            "estado": "Guanajuato",

            "telefono": "4721228360"
        },
        "usuario": {
            "id": 3,
            "nombreUsuario": "gmail",
            "contrasenia": "utlsecret#",
            "rol": "ADMS"
        }
    }, {
        "id": 4,
        "clave": "67532",
        "email": "tovardiazjuana@gmail",
        "fechaContratacion": "15/10/2029",
        "puesto": "administrador",
        "salarioBruto": 11370.00,
        "estatus": 1,
        "persona": {
            "id": 9,
            "nombre": "Nora",
            "apellidopaterno": "Diaz",
            "apellidoMaterno": "Martinez",
            "genero": "M",
            "rfc": "3hhdehdedhwe",
            "curp": "4d46484reref",
            "fechadenacimiento": "15 / 10 / 2029",
            "foto": "",
            "domicilio": "provada los pinos no.10",
            "codigoPostal": "3427",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4721228360"
        },
        "usuario": {
            "id": 21,
            "nombreUsuario": "gmail",
            "contrasenia": "utlsecret#",
            "rol": "ADMS"
        }
    },
    {
        "id": 10,
        "clave": "67532",
        "email": "tovardiazjuana@gmail",
        "fechaContratacion": "15/10/2029",
        "puesto": "administrador",
        "salarioBruto": 11370.00,
        "estatus": 1,
        "persona": {
            "id": 1,
            "nombre": "Nora",
            "apellidopaterno": "Diaz",
            "apellidoMaterno": "Martinez",
            "genero": "M",
            "rfc": "3hhdehdedhwe",
            "curp": "4d46484reref",
            "fechadenacimiento": "15 / 10 / 2029",
            "foto": "",
            "domicilio": "provada los pinos no.10",
            "codigoPostal": "3427",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4721228360"
        },
        "usuario": {
            "id": 57,
            "nombreUsuario": "gmail",
            "contrasenia": "utlsecret#",
            "rol": "ADMS"
        }
    },
    {
        "id": 11,
        "clave": "67532",
        "email": "tovardiazjuana@gmail",
        "fechaContratacion": "15 / 10 / 2029",
        "puesto": "administrador",
        "salarioBruto": 11370.00,
        "estatus": 1,
        "persona": {
            "id": 32,
            "nombre": "Nora",
            "apellidopaterno": "Diaz",
            "apellidoMaterno": "Martinez",
            "genero": "M",
            "rfc": "3hhdehdedhwe",
            "curp": "4d46484reref",
            "fechadenacimiento": "15 / 10 / 2029",
            "foto": "",
            "domicilio": "provada los pinos no.10",
            "codigoPostal": "3427",
            "ciudad": "Leon",
            "estado": "Guanajuato",
            "telefono": "4721228360"
        },
        "usuario": {
            "id": 10,
            "nombreUsuario": "gmail",
            "contrasenia": "utlsecret#",
            "rol": "ADMS"
        }
    }
];


//conts filtrador = new mdb.Datatable(document.getAnimations(),data)

//Esta funcion nos sirve para inicializar el modulo.
//de Empleados
export function inicializar() {
    setDetallesEmpleadoVisible(false);
    fillTableEmpleado();
    
}

//insert y update en el mismo metodo
export function save()
{
    //Declara un objeto donde se guardaran los datos del Empleado
    let emp = null;
    let posicion = -1; //para saber si un empleado ya existe o no.
    let idEmpleado = 0;
    //Revisamos si hay un Id de empleado:

    if (document.getElementById("txtIdEmpleado").value.trim().length > 0)// trim quita espacios de isquiera o derecha
    {
        idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value.trim());
        posicion = buscarPosicionEmpleadoPorId(idEmpleado);

        //SI posicion es mayor o igual a 0, si encontramos el empleado:
        if (posicion >= 0)
            emp = empleados[posicion];
        else {
            //Si no hay un empleado con el ID descrito
            //creamos una nueva instancia del objeto

            emp = new Object();
            emp.id = idEmpleado;
            emp.persona = new Object();
            emp.persona.id = parseInt(document.getElementById("txtIdPersona").value.trim());
            emp.usuario = new Object();
            emp.usuario.id = parseInt(document.getElementById("txtIdUsuario").value.trim());

            //incerta el objeto emp dentro del arreglo empleado:
            empleados.push(emp);
        }

        //continuamos llenando los datos del objeto
        //Datos de persona:
        //Datos de persona
        emp.persona.nombre = document.getElementById("txtNombre").value;
        emp.persona.apellidopaterno = document.getElementById("txtApellido").value;
        emp.persona.apellidoMaterno = document.getElementById("txtMaterno").value;
        emp.persona.genero = document.getElementById("cmbGenero").value;
        emp.persona.fechadenacimiento = document.getElementById("txtFechaNacimiento").value;
        emp.persona.rfc = document.getElementById("txtRFC").value;
        emp.persona.curp = document.getElementById("txtCURP").value;
        emp.persona.foto = document.getElementById("SelectImage").value;
        emp.persona.domicilio = document.getElementById("txtDomicilio").value;
        emp.persona.codigoPostal = document.getElementById("txtCodigopostal").value;
        emp.persona.ciudad = document.getElementById("txtCiudad").value;
        emp.persona.estado = document.getElementById("txtEstado").value;
        emp.persona.telefono = document.getElementById("txtTelefono").value;

        //Datos de Empleados

        emp.clave = document.getElementById("txtCodigoEmpleado").value;
        emp.email = document.getElementById("txtEmail").value;
        emp.fechaContratacion = document.getElementById("txtFechaIngreso").value;
        emp.puesto = document.getElementById("txtPuesto").value;
        emp.salarioBruto = document.getElementById("txtSalarioMensual").value;
        // document.getElementById("status").value = emp.status;


        //Refrescamos la tabla
        fillTableEmpleado();

        swal.fire('Movimiento Realizado', 'Datos de Empleado Actualizado correctamente', 'success');
    } else
    {
        swal.fire('verificaci&oacute;n de datos requerida',
                'Deve de agregar el ID al Empleado (Valor num&eacute;rico)', 'warning');
    }
}

export function deleteEmpleado()
{

    let posicion = -1;
    let idEmpleado = 0;

//Revisamos si hay un Id de empleado
    if (document.getElementById("txtIdEmpleado").value.trim().length > 0)
    {
        //Recuperamos el ID del empleado que deseamos eliminar

        idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value.trim());

        //Buscamos la posicion del Empleado con ese ID

        posicion = buscarPosicionEmpleadoPorId(idEmpleado);

        //Si la posicion del empleado con ese ID;

        if (posicion >= 0)
        {
            empleados.splice(posicion, 1);
            swal.fire('Movimiento realizado.', 'Registro de empleado Eliminado', 'success');
            fillTableEmpleado();
        } else
        {
            swal.fire('', 'El Id de empleado especificado no existe.', 'warning');
        }

    } else
    {
        swal.fire('Verificaci&oacute;n de datos requerida.',
                'Debe agregar un ID al empleado (valor num&eacute;rico).',
                'warning');
    }


}

export function getEmpleado()
{

}

//llena la tabla de Empleados.
//Con el arreglo.
function fillTableEmpleado()
{
    //aqui vamos ir guardando el contenido de la tabla  del
    //tbody de la tabla de Empleados :
    let contenido = '';

//Recorrer el areglo elemento por elemento
    for (let i = 0; i < empleados.length; i++)
    {
        contenido += '<tr>' +
                '<td>' +
                empleados[i].persona.nombre + ' ' +
                empleados[i].persona.apellidopaterno + ' ' +
                empleados[i].persona.apellidoMaterno +
                '</td>' +
                '<td> ' + empleados[i].clave + '</td>' +
                '<td>' + empleados[i].persona.rfc + '</td>' +
                '<td>' + empleados[i].email + '</td>' +
                '<td>' + empleados[i].persona.telefono + '</td>' +
                '<td>' + empleados[i].id +'</td>' +
                '<td>' +
                ' <a href="#" class="text-success text-decoration-none" onclick="cm.cargarDetalleEmpleado(' + i + ');"><i class="fa fa-circle-info"></i></a>'+
                '</td>' +
                '</tr>';
    }
    document.getElementById("tbodyEmpleados").innerHTML = contenido;
}

export function cargarDetalleEmpleado(posicion)
{


    //Recuperamos el Empleado en la posicion indicada:
    let emp = empleados[posicion];

    // LLenamos las cajas de texto y demas controles con los datos del
    // empleado que recuperamos previamente:
    document.getElementById("txtIdEmpleado").value = emp.id;
    document.getElementById("txtIdPersona").value = emp.persona.id;
    document.getElementById("txtIdUsuario").value = emp.usuario.id;

    // Datos de Persona:
    document.getElementById("txtNombre").value = emp.persona.nombre;
    document.getElementById("txtApellido").value = emp.persona.apellidopaterno;
    document.getElementById("txtMaterno").value = emp.persona.apellidoMaterno;
    document.getElementById("cmbGenero").value = emp.persona.genero;
    document.getElementById("txtFechaNacimiento").value = emp.persona.fechadenacimiento;
    document.getElementById("txtRFC").value = emp.persona.rfc;
    document.getElementById("txtCURP").value = emp.persona.curp;
    document.getElementById("txtDomicilio").value = emp.persona.domicilio;
    document.getElementById("txtCodigopostal").value = emp.persona.codigoPostal;
    document.getElementById("txtCiudad").value = emp.persona.ciudad;
    document.getElementById("txtEstado").value = emp.persona.estado;
    document.getElementById("txtTelefono").value = emp.persona.telefono;

    // Datos del Empleado:
    document.getElementById("txtCodigoEmpleado").value = emp.clave;
    document.getElementById("txtEmail").value = emp.email;
    document.getElementById("txtFechaIngreso").value = emp.fechaContratacion;
    document.getElementById("txtPuesto").value = emp.puesto;
    document.getElementById("txtSalarioMensual").value = emp.salarioBruto;

    // Datos de Usuario:
    document.getElementById("txtNombreUsuario").value = emp.usuario.nombreUsuario;
    document.getElementById("txtContrasenia").value = emp.usuario.contrasenia;
    document.getElementById("cmbRol").value = emp.usuario.rol;
    
    setDetallesEmpleadoVisible(true);

}


export function clearForm()
{

    document.getElementById("txtIdEmpleado").value = '';
    document.getElementById("txtIdPersona").value = '';
    document.getElementById("txtIdUsuario").value = '';


    //Datos de persona

    document.getElementById("txtNombre").value = '';
    document.getElementById("txtApellido").value = '';
    document.getElementById("txtMaterno").value = '';
    document.getElementById("cmbGenero").value = '';
    document.getElementById("txtFechaNacimiento").value = '';
    document.getElementById("txtRFC").value = '';
    document.getElementById("txtCURP").value = '';
    document.getElementById("SelectImage").value = '';
    document.getElementById("txtDomicilio").value = '';
    document.getElementById("txtCodigopostal").value = '';
    document.getElementById("txtCiudad").value = '';
    document.getElementById("txtEstado").value = '';
    document.getElementById("txtTelefono").value = '';

    //Datos de Empleados

    document.getElementById("txtCodigoEmpleado").value = '';
    document.getElementById("txtEmail").value = '';
    document.getElementById("txtFechaIngreso").value = '';
    document.getElementById("txtPuesto").value = '';
    document.getElementById("txtSalarioMensual").value = '';

    //Datos de Usuario
    document.getElementById("txtNombreUsuario").value = '';
    document.getElementById("txtContrasenia").value = '';
    document.getElementById("cmbRol").value = '';
}

//Buscar la posicion de un objeto Empleado
//Con base en la propiedad Id y la devuelve.
//Si no se encuentra el id buscado
//El metodo devuelve -1.

function buscarPosicionEmpleadoPorId(idEmpleado)
{


    for (let i = 0;
    i < empleados.length; i++)
    {
        if (empleados[i].id === idEmpleado)
            return i;
    }
    return -1;
}

export function setDetallesEmpleadoVisible(valor)
{
    if (valor === true)
    {
        //Ocultar la seccion de  catalogos de empleados
        document.getElementById("divCatalogoEmpleado").style.display='none';

        ///Mostrar la seccion de detalles 
        document.getElementById("divDetalleEmpleado").style.display ='';
    } else
    {
        
         //Ocultar la seccion de  catalogos de empleados
         document.getElementById("divDetalleEmpleado").style.display ='none';
         
         ///Mostrar la seccion de detalles 
        document.getElementById("divCatalogoEmpleado").style.display ='';
    }

}

export function clearAndShowDetalleEmpleado()
{
    
    clearForm();
    setDetallesEmpleadoVisible(true);
    
    
}




//visualisacion sobre la imagen
function previewImage(event) {
    const imagePreview = document.getElementById("imagenPreview");
    const fileInput = event.target;
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        imagePreview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
        }
}

