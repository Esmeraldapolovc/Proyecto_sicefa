
let catalogoDeProductos = [
    {
        "idProducto": 4,
        "nombre": "Paracetamol",
        "nombreGenerico": "Paracetamol",
        "formaFarmaceuitica": "ta",
        "unidadMedida": "60 mg/Kg",
        "precentacion": "bl",
        "principalIndiicacion": "No tomar con Alchol",
        "conradicciones": "hepatotoxicidad, toxicidad renal, alteraciones en la fórmula sanguínea, hipoglucemia y dermatitis alérgica",
        "concentracion": "73.67%",
        "unidadEnvase": "600mg",
        "preciCompra": "56.00$",
        "precioVenta": "76.00$",
        "foto": "",
        "rutaFoto": "img56735878dh.png",
        "codigoBarras": 5465766,
        "estado": "1"
    },
    {
        "idProducto": 8,
        "nombre": "Metformina ",
        "nombreGenerico": "Metformina ",
        "formaFarmaceuitica": "ca",
        "unidadMedida": "500mg/Kg",
        "precentacion": "fr",
        "principalIndiicacion": "utilizada en pacientes obesos o con tendencia al sobrepeso.",
        "conradicciones": "diarrea, náusea y malestar estomacal",
        "concentracion": "44%",
        "unidadEnvase": "1000mg",
        "preciCompra": "82.00$",
        "precioVenta": "107.00$",
        "foto": "",
        "rutaFoto": "img8631875.png",
        "codigoBarras": 286392,
        "estado": "1"
    },
    {
        "idProducto": 9,
        "nombre": "Vicodin",
        "nombreGenerico": "Hidrocadona",
        "formaFarmaceuitica": "ta",
        "unidadMedida": "1-2 tabletas",
        "precentacion": "bl",
        "principalIndiicacion": "No apto para niños menores a 10 años",
        "conradicciones": "estreñimiento, somnolencia, aturdimiento, pensamiento confuso, ansiedad y garganta seca ",
        "concentracion": "5-30µg/L",
        "unidadEnvase": "500mg",
        "preciCompra": "930.00$",
        "precioVenta": "1118.00$",
        "foto": "",
        "rutaFoto": "img7569758.png",
        "codigoBarras": 547691,
        "estado": "0"
    },
    {
        "idProducto": 10,
        "nombre": "isotretinoina",
        "nombreGenerico": "isotretinoina",
        "formaFarmaceuitica": "pi",
        "unidadMedida": "10",
        "precentacion": "bl",
        "principalIndiicacion": "No apto para niños menores a 10 años",
        "conradicciones": "estreñimiento, somnolencia, aturdimiento, pensamiento confuso, ansiedad y garganta seca ",
        "concentracion": "5-30µg/L",
        "unidadEnvase": "600mg",
        "preciCompra": "1420.00$",
        "precioVenta": "1600.00$",
        "foto": "",
        "rutaFoto": "img7569758.png",
        "codigoBarras": 57866691,
        "estado": "1"
    },
    {
        "idProducto": 11,
        "nombre": "nitrato de meterlo compuesto",
        "nombreGenerico": "Tentramitrozon",
        "formaFarmaceuitica": "ta",
        "unidadMedida": "6",
        "precentacion": "fr",
        "principalIndiicacion": "No apto para personas menores a 18 años",
        "conradicciones": "estreñimiento, somnolencia, aturdimiento, pensamiento confuso, ansiedad y garganta seca ",
        "concentracion": "5-30µg/L",
        "unidadEnvase": "200mg",
        "preciCompra": "50.00$",
        "precioVenta": "78.00$",
        "foto": "",
        "rutaFoto": "img7569758.png",
        "codigoBarras": 4569991,
        "estado": "0"
    }
];
//Esta funcion nos sirve para inicializar el modulo 
//de empleados
export function inicializar()
{
    fillTableProduct();
    setDetallesProductoVisible(false);
    
}
export function saveProduct()
{
    //Declaramos un objeto donde vamos a guardar los datos del empleado
    let product = null;
    let posicion = -1; ////para saber si existe o no existe
    let idProducto = 0;
//Revisamos si hay un ID de un empleado
    if (document.getElementById("txtIdProducto").value.trim().length > 0) {

        idProducto = parseInt(document.getElementById("txtIdProducto").value.trim());
        posicion = searchPositionProductForId(idProducto);
        if (posicion >= 0)
            product = catalogoDeProductos[posicion];
        else {
            ///////////////Si no hay un empleado con el ID descrito
            //creamos una nueva instancia del Object
            product = new Object();
            product.idProducto = idProducto;
            catalogoDeProductos.push(product);
            //continuamos con cada uno de los atributos
        }

        product.nombre = document.getElementById("txtnombreP").value;
        product.nombreGenerico = document.getElementById("txtnombrePg").value;
        product.formaFarmaceuitica = document.getElementById("txtformaF").value;
        product.unidadMedida = document.getElementById("txtunidadM").value;
        product.precentacion = document.getElementById("cmbprecentacion").value;
        product.principalIndiicacion = document.getElementById("txtindicacionP").value;
        product.conradicciones = document.getElementById("txtcontradicciones").value;
        product.concentracion = document.getElementById("txtconcentracion").value;
        product.unidadEnvase = document.getElementById("txtunidadEv").value;
        product.preciCompra = document.getElementById("txtprecioC").value;
        product.precioVenta = document.getElementById("txtprecioV").value;
        product.foto = document.getElementById("txtfotoP").value;
        product.rutaFoto = document.getElementById("txtrutaFotoP").value;
        product.codigoBarras = document.getElementById("txtcodigoB").value;
        product.estado = document.getElementById("cmbEstadoP").value;

        fillTableProduct();
        Swal.fire('Movimiento realizaado', 'Datos de Producto Actualizados correctamente.', 'success');

    } else
    {
         swal.fire('verificaci&oacute;n de datos requerida',
                'Deve de agregar el ID DE producto (Valor num&eacute;rico)', 'warning');
    }

}


export function deleteProduct()
{
    let posicion = -1;
    let idProducto = 0;
//Revisar si hay un ID deempleado
    if (document.getElementById("txtIdProducto").value.trim().length > 0)
    {
//recuperamos el Id del  empleado que deseamos eliminar:
    idProducto = parseInt(document.getElementById("txtIdProducto").value.trim());
//Buscamos la Posicion del empleado con ese Id
    posicion = searchPositionProductForId(idProducto);
//si la posicion del empleado existen, lo quitamos del arreglo
    if (posicion >= 0)
    {
        catalogoDeProductos.splice(posicion, 1);
        Swal.fire('Movimiento Realizado', 'Registro de producto Eliminado', 'success');
        fillTableProduct();
    } else
    {
        Swal.fire('', 'El Id del producto especificado no existe.', 'warning');
    }
   }

}
export function getProduct()
{


}
///////Llena la tabla del html
////con el arreglo de empleados
function fillTableProduct()
{
    //////////Aqui vamos ir guardando el contenido
    //tbody de la tabla de empleados: 
    let contenido = "";
    for (let i = 0; i < catalogoDeProductos.length; i++)
    {
        contenido += '<tr>' +
                '<td>' +
                catalogoDeProductos[i].nombre + '</td>' +
                '<td>' +
                catalogoDeProductos[i].nombreGenerico + '</td>' +
                '<td>' +
                catalogoDeProductos[i].unidadMedida + '</td>' +
                '<td>' +
                catalogoDeProductos[i].concentracion + '</td>' +
                '<td>' +
                catalogoDeProductos[i].unidadEnvase + '</td>' +
                '<td>' +
                
                catalogoDeProductos[i].preciCompra + '</td>' +
                '<td>' +
                catalogoDeProductos[i].precioVenta + '</td>' +
                '<td>' +
                '<a href="#" class="text-info" onclick="cm.cargarDetallesProducto(' + i + ');"><i class="fa fa-circle-info"></i></a>' +
                '</td>' +
                '</tr>';
    }
    document.getElementById("tbodyProductos").innerHTML = contenido;
}
export function cargarDetallesProducto(posicion) {
    /////recuperar el empleado en la posicion indicada:
    let prod = catalogoDeProductos[posicion];
    //Detales de emepleado
    document.getElementById("txtIdProducto").value = prod.idProducto;
    document.getElementById("txtnombreP").value = prod.nombre;
    document.getElementById("txtnombrePg").value = prod.nombreGenerico;
    document.getElementById("txtformaF").value = prod.formaFarmaceuitica;
    document.getElementById("txtunidadM").value = prod.unidadMedida;
    document.getElementById("cmbprecentacion").value = prod.precentacion;
    document.getElementById("txtindicacionP").value = prod.principalIndiicacion;
    document.getElementById("txtcontradicciones").value = prod.conradicciones;
    document.getElementById("txtconcentracion").value = prod.concentracion;
    document.getElementById("txtunidadEv").value = prod.unidadEnvase;
    document.getElementById("txtprecioC").value = prod.preciCompra;
    document.getElementById("txtprecioV").value = prod.precioVenta;
    document.getElementById("txtfotoP").value = prod.foto;
    document.getElementById("txtrutaFotoP").value = prod.rutaFoto;
    document.getElementById("txtcodigoB").value = prod.codigoBarras;
    document.getElementById("cmbEstadoP").value = prod.estado;
    setDetallesProductoVisible(true);

}
export function clearForm() {

    document.getElementById("txtIdProducto").value = "";
    document.getElementById("txtnombreP").value = "";
    document.getElementById("txtnombrePg").value = "";
    document.getElementById("txtformaF").value = "";
    document.getElementById("txtunidadM").value = "";
    document.getElementById("cmbprecentacion").value = "";
    document.getElementById("txtindicacionP").value = "";
    document.getElementById("txtcontradicciones").value = "";
    document.getElementById("txtconcentracion").value = "";
    document.getElementById("txtunidadEv").value = "";
    document.getElementById("txtprecioC").value = "";
    document.getElementById("txtprecioV").value = "";
    document.getElementById("txtfotoP").value = "";
    document.getElementById("txtrutaFotoP").value = "";
    document.getElementById("txtcodigoB").value = "";
    document.getElementById("cmbEstadoP").value = "";
}
//Buscar la posicion de de un objeto empleado
//con base en la propiedad ID y la devuelve
//Si no se encintra el ID bscado
// el metodo devuelve -1
function searchPositionProductForId(idProducto) {


    for (let i = 0; i < catalogoDeProductos.length; i++)
    {
        if (catalogoDeProductos[i].idProducto === idProducto) 
            return i;
        }
        return -1;
    }
export function setDetallesProductoVisible(valor){
    if(valor === true){
        ///ocultamos la seccion del catalago de la seccion de empleados
        document.getElementById("divCatalogoProductos").style.display="none";
        //////Mostrar la seccion de detalles
        document.getElementById("divDetalleProductos").style.display="";
    }else{
        //////Mostrar la seccion de detalles
        document.getElementById("divDetalleProductos").style.display="none";
         ///ocultamos la seccion del catalago de la seccion de empleados
        document.getElementById("divCatalogoProductos").style.display="";
    }
    
}
export function cleanAndShowProduct(){
    clearForm();
    setDetallesProductoVisible(true);
}