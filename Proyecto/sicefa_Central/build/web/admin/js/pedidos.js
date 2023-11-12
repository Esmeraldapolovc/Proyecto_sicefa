let compras = [
    {
        "id": 11,
        "fecha": "2023/08/14",
        "nombreSucursal": "Sucursal Centro Max",
        "nombreEmpleado": "María González López",
        "estatus": 1
    },
    {
        "id": 12,
        "fecha": "2023/08/15",
        "nombreSucursal": "Sucursal Plaza Mayor",
        "nombreEmpleado": "Pedro Ramírez Sánchez",
        "estatus": 1
    },
    {
        "id": 13,
        "fecha": "2023/08/16",
        "nombreSucursal": "Sucursal Centro",
        "nombreEmpleado": "Laura Rodríguez García",
        "estatus": 1
    },
	{
        "id": 14,
        "fecha": "2023/08/17",
        "nombreSucursal": "Sucursal Centro",
        "nombreEmpleado": "Juan Pérez Martínez",
        "estatus": 1
    },
    {
        "id": 15,
        "fecha": "2023/08/18",
        "nombreSucursal": "Sucursal Plaza Mayor",
        "nombreEmpleado": "Ana López García",
        "estatus": 1
    },
    {
        "id": 16,
        "fecha": "2023/08/19",
        "nombreSucursal": "Sucursal Centro Max",
        "nombreEmpleado": "Luis Rodríguez Sánchez",
        "estatus": 1
    }

];
export function inicializar() 
{    
    setDetalleCompraVisible(false);
    fillTableCompra();
}
export function savePedidos()
{
    //Declara un objeto donde se guardaran los datos del pedido
    let compra = null;
    let posicion = -1; //para saber si un pedido ya existe o no.
    let idCompra = 0;
    //Revisamos si hay un Id de empleado:
    if (document.getElementById("txtIdCompra").value.trim().length > 0)// trim quita espacios de isquiera o derecha
    {
        idCompra = parseInt(document.getElementById("txtIdCompra").value.trim());
        posicion = buscarPosicionCompraPorId(idCompra);

        if (posicion >= 0)
            compra = compras[posicion];
        else {

            compra = new Object();
            compra.id = idCompra;

            compras.push(compra);
        }
        compra.fecha = document.getElementById("txtFecha").value;
        compra.nombreSucursal = document.getElementById("txtSucursal").value;
        compra.nombreEmpleado = document.getElementById("txtNombreEmpleado").value;
        compra.estatus = document.getElementById("txtEstatus").value;
        
        fillTableCompra();

        swal.fire('Movimiento Realizado', 'Datos de pedido Actualizado correctamente', 'success');
    } else
    {
        swal.fire('verificaci&oacute;n de datos requerida',
                'Deve de agregar el ID al comprador (Valor num&eacute;rico)', 'warning');
    }
}
    
function fillTableCompra()
{
    //aqui vamos ir guardando el contenido de la tabla  del
    //tbody de la tabla de Empleados :
    let contenido = '';

//Recorrer el areglo elemento por elemento
    for (let i = 0; i < compras.length; i++)
    {
        contenido += '<tr>' +
                '<td> ' + compras[i].id + '</td>' +
                '<td>' + compras[i].fecha + '</td>' +
                '<td>' + compras[i].nombreSucursal + '</td>' +
                '<td>' + compras[i].nombreEmpleado + '</td>' +
                '<td> ' + compras[i].estatus + '</td>' +
                '<td>' +
                ' <a href="#" class="text-info" onclick="cm.cargarDetalleCompra(' + i + ');"><i class="fa fa-circle-info"></i></a>' +
                '</td>' +
                '</tr>';
    }
    document.getElementById("tbodyPedidos").innerHTML = contenido;
}

export function cargarDetalleCompra(posicion)
{


    //Recuperamos el Empleado en la posicion indicada:
    let compra = compras[posicion];

    // LLenamos las cajas de texto y demas controles con los datos del
    // empleado que recuperamos previamente:
    document.getElementById("txtIdCompra").value = compra.id;
    document.getElementById("txtFecha").value = compra.fecha;
    document.getElementById("txtSucursal").value = compra.nombreSucursal;
    document.getElementById("txtNombreEmpleado").value = compra.nombreEmpleado;
    document.getElementById("txtEstatus").value = compra.estatus;

    setDetalleCompraVisible(true);

}

function buscarPosicionCompraPorId(id)
{
    for (let i = 0;
    i < compras.length; i++)
    {
        if (compras[i].id === id)
            return i;
    }
    return -1;
}

export function setDetalleCompraVisible(valor)
{
    if (valor === true)
    {
        //Ocultamos la seccion de catalogo de Compra:
        document.getElementById('divCatalogoCompra').style.display = 'none';

        //Mostramos la seccion del detalle:
        document.getElementById('divDetalleCompra').style.display = '';
    } else
    {
        //Ocultamos la seccion de detalles de Compra:
        document.getElementById('divDetalleCompra').style.display = 'none';

        //Mostramos la seccion de Catalogo de Compra:
        document.getElementById('divCatalogoCompra').style.display = '';
    }
}