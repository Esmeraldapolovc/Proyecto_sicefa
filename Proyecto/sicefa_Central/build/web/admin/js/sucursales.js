
///objetos
let sucursales = [];



///////////////////////FUNCIONES 
export async function inicializar() {
    setDetallesSucursalVisible(false);
    refreshTableSucursales();
}

//insert y update en el mismo metodo
export async function save()
{

    let url = "http://localhost:8080/sicefa_backend/api/sucursal/save";
    let params = null;
    let resp = null;
    let datos = null;


//Declara un objeto donde se guardaran los datos de la Sucursal
    let su = null;
    // para saber si una sucursal ya existe o no.
    let idSucursal = 0;
//Revisamos si hay un id Sucursal

    if (document.getElementById("txtId").value.trim().length > 0) //trim quita espacios de isquierda o derecha
    {
        idSucursal = parseInt(document.getElementById("txtId").value.trim());


    } //Si posicion es mayor o igual a 0, si encontramos a la sucursal:

    //  if (posicion >= 0)
    //      su = sucursales[posicion];
    //   else
    // {
    //Si no hay un empleado con el ID descrito
    //creamos una nueva instancia del objeto

    su = new Object();
    su.id = idSucursal;

    //incerta el objeto su del arreglo empleado:

    sucursales.push(su);




    su.id = document.getElementById("txtId").value;
    su.nombreDeLaSucursal = document.getElementById("txtNombreSucursal").value;
    su.nombreDelTitular = document.getElementById("txtNombredelapersonatitular").value;
    su.rfc = document.getElementById("txtrfc").value;
    su.domicilio = document.getElementById("domicilio").value;
    su.colonia = document.getElementById("colonia").value;
    su.estado = document.getElementById("cmbEstado").value;
    su.codigoPostal = document.getElementById("txtcodigoPostal").value;
    su.telefono = document.getElementById("txtTelefono").value;
    su.longitud = document.getElementById("txtlongitud").value;
    su.latitud = document.getElementById("txtlatitud").value;
    su.status = document.getElementById("txtStatus").value;
    su.ciudad = document.getElementById("txtCiudad").value;

    params = {
        datosSucursal: JSON.stringify(su)
    };

    let ctype = 'application/x-www-form-urlencoded;charset=UTF-8';
    resp = await fectch(url,
            {
                method: "POST",
                headers: {'Content-Type': ctype},
                body: new URLSearchParams(params)
            });

    datos = await resp.json();

    if (datos.error != null) {
        Swal.fire('Error al guardar los datos de empleados.', datos.error, 'warning');
        return;
    }
    if (datos.exception != null) {
        Swal.fire('', datos.exception, 'warning');
        return;
    }
    alert(JSON.stringify(datos));
    cargarDatosEmpleadosEnFornulario(datos);
    Swal.fire('Movimiento Realizado',
            'Datos de Empleado Actualizacion correctamente.',
            'success');

    //Refrescar la tabla
    fillTableSucursal();
}

export function deleteSucursal()
{

    let posicion = -1;
    let idSucursal = 0;

//Revisa si hay un id de empleado
    if (document.getElementById("txtId").value.trim().length > 0) {

        //Recuperamos el Id de la sucursal que deseamos Eliminar
        idSucursal = document.getElementById("txtId").value.trim();

        //Buscamos la posicion del la sucurdal con ese ID
        posicion = buscarPosicionSucursal(idSucursal);

        //Si la posicion del empleado con eae ID

        if (posicion >= 0) {
            sucursales.splice(posicion, 1);
            Swal.fire('movimiento realizado.', 'Registro de Sucursales Eliminado', 'success');
            fillTableSucursal();
        } else
        {
            Swal.fire('', 'El ID de la Sucursal especificada no existe', 'warning');
        }
    } else
    {
        Swal.fire('Verificaci&oacute;n de datos requerida.',
                'Debe agregar un ID a la Sucursal (valor num&eacute;rico).',
                'warning');
    }
}




export function getSucursal()
{

}

export async function refreshTableSucursales()
{
    let url = "http://localhost:8080/sicefa_backend/api/sucursal/getAll";

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
    }

    sucursales = datos;
    fillTableSucursal();
}

//llena la tabla de Empleados.
//Con el arreglo.
function fillTableSucursal()
{
    //Aqui vamos a guardar el contenido de la tabla del
    //tbody  de la tabla de sucursales
    let contenido = '';

    //Recorrer el araglo elemento por elemento
    for (let i = 0; i < sucursales.length; i++)
    {
        contenido += '<tr>' +
                '<td>' +
                sucursales[i].nombre +
                '</td>' +
                '<td>' +
                sucursales[i].domicilio +
                '</td>' +
                '<td>' +
                sucursales[i].colonia +
                '</td>' +
                '<td>' +
                sucursales[i].ciudad +
                '</td>' +
                '<td>' +
                sucursales[i].telefono +
                '</td>' +
                '<td>' +
                '<a href="#" class=text-info onclick="cm.cargarDetalleSucursal(' + i + ');"> <i class="fa fa-circle-info"></i></a>' +
                '</td>' +
                '</tr>';


    }
    document.getElementById("tbodySucursales").innerHTML = contenido;
}


export  function cargarDetalleSucursal(su)
{
    //Recuperando la Sucursal en la posicion indicada

    alert(JSON.stringify(su));

    //Llenamos la caja de texto y demas controles con datos de
    //la sucursal que recuperamos previamente

    document.getElementById("txtId").value = su.idSucursal;
    document.getElementById("txtNombreSucursal").value = su.nombre;
    document.getElementById("txtNombredelapersonatitular").value = su.titular;
    document.getElementById("txtrfc").value = su.rfc;
    document.getElementById("domicilio").value = su.domicilio;
    document.getElementById("colonia").value = su.colonia;
    document.getElementById("cmbEstado").value = su.estado;
    document.getElementById("txtcodigoPostal").value = su.codigoPostal;
    document.getElementById("txtTelefono").value = su.telefono;
    document.getElementById("txtlongitud").value = su.longitud;
    document.getElementById("txtlatitud").value = su.latitud;
    document.getElementById("txtStatus").value = su.status;
    document.getElementById("txtCiudad").value = su.ciudad;

    setDetallesSucursalVisible(true);
}

export function clearForm()
{
    //Datos de sucursal
    document.getElementById("txtId").value = '';
    document.getElementById("txtNombreSucursal").value = '';
    document.getElementById("txtNombredelapersonatitular").value = '';
    document.getElementById("txtrfc").value = '';
    document.getElementById("domicilio").value = '';
    document.getElementById("colonia").value = '';
    document.getElementById("cmbEstado").value = '';
    document.getElementById("txtcodigoPostal").value = '';
    document.getElementById("txtTelefono").value = '';
    document.getElementById("txtlongitud").value = '';
    document.getElementById("txtlatitud").value = '';
    document.getElementById("txtStatus").value = '';
    document.getElementById("txtCiudad").value = '';
}

function buscarPosicionSucursal(idSucursal)
{
    for (let i = 0;
    i < sucursales.length; i++)
    {
        if (sucursales[i].id === idSucursal)
            return i;
    }

    return -1;
}


export function setDetallesSucursalVisible(valor)
{
    if (valor === true)
    {
        //Ocultar la seccion de  catalogos de empleados
        document.getElementById("divCatalogoSucursal").style.display = 'none';

        ///Mostrar la seccion de detalles 
        document.getElementById("divDetalleSucursal").style.display = '';
    } else
    {

        //Ocultar la seccion de  catalogos de empleados
        document.getElementById("divDetalleSucursal").style.display = 'none';

        ///Mostrar la seccion de detalles 
        document.getElementById("divCatalogoSucursal").style.display = '';
    }

}

export function clearAndShowDetalleSucursal()
{

    clearForm();
    setDetallesSucursalVisible(true);


}


