let empleados =[]; 


//conts filtrador = new mdb.Datatable(document.getAnimations(),data)

//Esta funcion nos sirve para inicializar el modulo.
//de Empleados
export async function inicializar() {
    setDetallesEmpleadoVisible(false);
    refreshTableEmpleados();
}


// Insert y Update en el mismo metodo:
export async function save()
{
    let url = "http://localhost:8080/sicefa_backend/api/empleado/save";
    let params = null;
    let resp = null;
    let datos = null;
    // Declaramos un objeto donde guardaremos los datos del empleado:
    let emp = null;   
    let idEmpleado = 0;
    let idPersona = 0;
    let idUsuario = 0;
    
    // Revisamos si hay un ID de empleado:
    if (document.getElementById("txtIdEmpleado").value.trim().length > 0)
    {
        idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value.trim());
        idPersona = parseInt(document.getElementById("txtIdPersona").value.trim());
        idUsuario = parseInt(document.getElementById("txtIdUsuario").value.trim());
    }    
        
    // Si no hay un empleado con el ID descrito,
    // creamos una nueva instancia del Objeto:
    emp = new Object();
    emp.id = idEmpleado;
 
    emp.persona = new Object();
    emp.persona.id = idPersona;
    
    emp.usuario = new Object();
    emp.usuario.id = idUsuario;
    
    emp.sucursal = new Object();
    emp.sucursal.id = 0;
        
    // Si posicion es mayor o igual a 0, si encontramos un empleado:
   // if (posicion >= 0)
  //      emp = empleados[posicion];
  //  else
  //  {
 
 
        // Insertamos el objeto emp dentro del arreglo de empleados:
   //     empleados.push(emp);
    //}
        
    // Continuamos llenando los datos del objeto:
    // Datos de Persona:
    emp.persona.nombre = document.getElementById("txtNombre").value;
    emp.persona.apellidoPaterno = document.getElementById("txtApellidoPaterno").value;
    emp.persona.apellidoMaterno = document.getElementById("txtApellidoMaterno").value;
    emp.persona.genero = document.getElementById("cmbGenero").value;
    emp.persona.fechaNacimiento = document.getElementById("txtFechaNacimiento").value;
    emp.persona.rfc = document.getElementById("txtRFC").value;
    emp.persona.curp = document.getElementById("txtCURP").value;
    emp.persona.domicilio = document.getElementById("txtDomicilio").value;
    emp.persona.cp = document.getElementById("txtCodigopostal").value;
    emp.persona.ciudad = document.getElementById("txtCiudad").value;
    emp.persona.estado = document.getElementById("txtEstado").value;
    emp.persona.telefono = document.getElementById("txtTelefono").value;
 
    // Datos del Empleado:
    emp.codigo = document.getElementById("txtCodigoEmpleado").value;
    emp.email = document.getElementById("txtEmail").value;
    emp.fechaContratacion = document.getElementById("txtFechaIngreso").value;
    emp.puesto = document.getElementById("txtPuesto").value;
    emp.salarioBruto = document.getElementById("txtSalarioMensual").value; 
    emp.sucursal.id = document.getElementById("cmbSucursal").value;
 
    // Datos de Usuario:
    emp.usuario.nombreUsuario = document.getElementById("txtNombreUsuario").value;
    emp.usuario.contrasenia = document.getElementById("txtContrasenia").value;
    emp.usuario.rol = document.getElementById("cmbRol").value;
    
    params = {
             datosEmpleados : JSON.stringify(emp)
    };
    
    let ctype = 'application/X-WWW-form-urlencoded;charset=UTF-8';
    resp = await fetch( url,
    {
        method : "POST",
        headers:{'Content-Type':ctype},
        body: new URLSearchParams(Params)
    });
    
    datos = await resp.json();
    
    if(datos.error !=null){
        Swal.fire('Error al guardar los datos de empleados.', datos.error, 'warning');
        return;
    }
    if(datos.exception !=null){
            Swal.fire('',datos.exception, 'danger');
        return;
    }

    cargarDatosEmpleadosEnFornulario(datos);
    Swal.fire('Movimiento Realizado',
              'Datos de Empleado Actualizacion correctamente.', 
               'success')
    // Refrescamos el catalogo de empleados:
    fillTableEmpleado();
 
  
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


export async function refreshTableEmpleados()
{
    let url = "http://localhost:8080/sicefa_backend/api/empleado/getAll";
    
    let resp = await fetch(url);
    let datos = await resp.json();
    
    
    if (datos.error != null)
    {
        Swal.fire('', datos.error, 'warning');
        return;
    }
    
    if (datos.exception != null)
    {
        Swal.fire('', datos.exception, 'danger');
        return;
    }
    empleados=datos;
    fillTableEmpleado();
}
//llena la tabla de Empleados.
//Con el arreglo.
function fillTableEmpleado()
{
    //Aqui vamos a ir guardando el contenido del
    //tbody de la tabla de empleados:
    let contenido = '';
   
    //Recorremos el arreglo elemento por elemento:
    for (let i = 0; i < empleados.length; i++)
    {
        contenido +=    '<tr>' +
                            '<td>' +
                                empleados[i].persona.nombre + ' ' +
                                empleados[i].persona.apellidoPaterno + ' ' +
                                empleados[i].persona.apellidoMaterno +
                            '</td>' +
                            '<td>' + empleados[i].codigo + '</td>' +
                            '<td>' + empleados[i].persona.rfc + '</td>' +
                            '<td>' + empleados[i].email + '</td>' +
                            '<td>' + empleados[i].persona.telefono + '</td>' +
                            '<td>' +
                                '<a href="#" class="text-info" onclick="cm.cargarDetalleEmpleado(' + i + ');"><i class="fa-brands fa-wpforms"></i></a>' +
                            '</td>' +
                        '</tr>';
    }
   
    document.getElementById("tbodyEmpleados").innerHTML = contenido;
}

export function cargarDatosEmpleadosEnFomulario(emp)
{
    alert(JSON.stringify(emp));
    //Llenamos la caja de texto y demas controles con los datos del
    //empleados que recuperamos
}   

export async function cargarDetalleEmpleado(emp)
{

  
    //Recuperamos el Empleado en la posicion indicada:
    alert(JSON.stringify(emp))

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
    document.getElementById("txtApellidoPaterno").value = '';
    document.getElementById("txtApellidoMaterno").value = '';
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

export async function cargarSucursales()
{
    let url = "http://localhost:8086/sicefa_backend/api/sucursal/getAll";
    let resp = await fetch(url);
    let datos = await resp.json();
    let contenido = '';
    
    if (datos.error != null)
    {
        Swal.fire('', datos.error, 'warning');
        return;
    }
    
    if (datos.exception != null)
    {
        Swal.fire('', datos.exception, 'danger');
        return;
    }
    
    //LLenamos las opciones del combo box con el ID y Nombre de la Sucursal:
    for (let i = 0; i < datos.length; i++)
        contenido +=  '<option value="' + datos[i].id + '">' + datos[i].nombre + '</option>';
    
    document.getElementById("cmbSucursal").innerHTML = contenido;
}

