let productos = [
    {
        idProducto: 1,
        NombreProducto: "acido propanoico",
        NombreGenerico: "Ibuprofeno",
        FormaFarmaceutica: "ta",
        UnidadMedida: "mg",
        Presentacion: "bl",
        Concentracion: "400",
        CodigoBarras: "123456789",
        UnidadEnvase: "12",
        PrecioUnitario: 79.99,
        PrecioCompra: 55.00,
        Estado: "1",
        Indicaciones: "Enfermedades reumáticas, como artritis reumatoide, osteoartritis, espondilitis anquilosante. Dolor de baja a moderada intensidad. Dismenorrea.",
        Contraindicaciones: "Contraindicado en casos de hipersensibilidad al ibuprofeno o al ácido acetilsalicílico, en pacientes con hemorragia gastrointestinal, úlcera péptica, insuficiencia hepática o renal, durante el embarazo y la lactancia. La administración simultánea de corticosteroides, suplementos de potasio o de alcohol aumenta el riesgo de efectos gastrointestinales. Puede incrementar el efecto hipoglucémico de la insulina.",
        RutaImagen: "../../media/img/Ibuprofeno.jpg"
    },
    {
        idProducto: 2,
        NombreProducto: "Acetaminofeno",
        NombreGenerico: "Paracetamol",
        FormaFarmaceutica: "ta",
        UnidadMedida: "mg",
        Presentacion: "bl",
        Concentracion: "500",
        CodigoBarras: "987654321",
        UnidadEnvase: "40",
        PrecioUnitario: 87.00,
        PrecioCompra: 62.00,
        Estado: "1",
        Indicaciones: "PARACETAMOL es un analgésico y antipirético eficaz para el control del dolor leve o moderado causado por afecciones articulares, otalgias, cefaleas, dolor odon­to­génico, neuralgias, procedimientos quirúrgicos menores etc. También es eficaz para el tratamiento de la fiebre, co­mo la originada por infecciones virales, la fiebre pos­vacunación, etcétera.",
        Contraindicaciones: "La ingestión de 3 o más bebidas alcohólicas por periodos prolongados, puede aumentar el riesgo de daño hepático o sangrado del tubo digestivo asociado al uso de PARACETAMOL, por lo que se deben considerar estas condiciones al prescribir el medicamento.",
        RutaImagen: "../../media/img/TRAMADOL-PARACETAMOL-AMSA.jpg"
    },
    {
        idProducto: 3,
        NombreProducto: "bencimidazol",
        NombreGenerico: "Omeprazol",
        FormaFarmaceutica: "ca",
        UnidadMedida: "mg",
        Presentacion: "fr",
        Concentracion: "20",
        CodigoBarras: "567890123",
        UnidadEnvase: "32",
        PrecioUnitario: 45.00,
        PrecioCompra: 40.00,
        Estado: "0",
        Indicaciones: "Esofagitis por reflujo gastroesofágico.\n\Úlcera duodenal, úlcera gástrica benigna (incluyendo las producidas por AINEs).",
        Contraindicaciones: "Hipersensibilidad a los componentes de la fórmula.\n\Úlcera gástrica maligna.",
        RutaImagen: "../../media/img/omeprazol.jpg"
    },
    {
        idProducto: 4,
        NombreProducto: "Lisinopril",
        NombreGenerico: "Doneka",
        FormaFarmaceutica: "ca",
        UnidadMedida: "mg",
        Presentacion: "fr",
        Concentracion: "20",
        CodigoBarras: "6853168514851",
        UnidadEnvase: "28",
        PrecioUnitario: 32.00,
        PrecioCompra: 29.00,
        Estado: "0",
        Indicaciones: "LISINOPRIL está indicado en el manejo de la hipertensión media a severa. Se emplea como monoterapia o en combinación con otra clase de agentes antihipertensivos.",
        Contraindicaciones: "El medicamento está contraindicado en pacientes con hipersensibilidad conocida al fármaco y en pacientes con historial de angioedema relacionado a un tratamiento previo con inhibidores de la ECA.",
        RutaImagen: "../../media/img/Lisinopril.jpg"
    }
];
export function deleteProduct()
{
    let posicion = -1;
    let idProducto = 0;
//Revisar si hay un ID deempleado
    if (document.getElementById("srcId").value.trim().length > 0)
        ;
//recuperamos el Id del  empleado que deseamos eliminar:
    idProducto = parseInt(document.getElementById("srcId").value.trim());
//Buscamos la Posicion del empleado con ese Id
    posicion = buscarPosicionProducto(idProducto);
//si la posicion del empleado existen, lo quitamos del arreglo
    if (posicion >= 0)
    {
        productos.splice(posicion, 1);
        Swal.fire('Movimiento Realizado', 'Registro de producto Eliminado', 'success');
        fillTableProduct();
    } else
    {
        Swal.fire('', 'El Id del producto especificado no existe.', 'warning');
    }
}

//Esta funcion nos sirve para inicializar el modulo de productos
export function inicializar() {
    setDetalleProductosVisible(false);
    fillTableProducto();
}
function fillTableProducto()
{
    //aqui vamos ir guardando el contenido de la tabla  del
    //tbody de la tabla de Producto :
    let contenido = '';

//Recorrer el areglo elemento por elemento
    for (let i = 0;
            i < productos.length; i++)
    {
        contenido += '<tr>' +
                '<td>' +
                productos[i].NombreProducto +
                '</td>' +
                '<td> ' +
                productos[i].NombreGenerico +
                '</td>' +
                '<td>' +
                productos[i].UnidadMedida +
                '</td>' +
                '<td>' +
                productos[i].Concentracion + ' ' + productos[i].UnidadMedida +
                '</td>' +
                '<td>' +
                productos[i].UnidadEnvase +
                '</td>' +
                '<td>' +
                '$ ' + productos[i].PrecioCompra +
                '</td>' +
                '<td>' +
                '$ ' + productos[i].PrecioUnitario +
                '</td>' +
                '<td>' +
                '<a href="#" class="text-success text-decoration-none" onclick="cmp.cargarDetalleProducto(' + i + ');"><i class="fa fa-circle-info"></a>' +
                '</td>' +
                '</tr>';
    }
    document.getElementById("tbodyProductos").innerHTML = contenido;
}
export function cargarDetalleProducto(posicionPro) {

    let pro = productos[posicionPro];

    document.getElementById("txtNomProd").value = pro.NombreProducto;
    document.getElementById("txtNomGen").value = pro.NombreGenerico;
    document.getElementById("cmbFormFarm").value = pro.FormaFarmaceutica;
    document.getElementById("txtUniMed").value = pro.UnidadMedida;
    document.getElementById("cmbPre").value = pro.Presentacion;
    document.getElementById("txtCon").value = pro.Concentracion + ' ' + pro.UnidadMedida;
    document.getElementById("txtUni").value = pro.UnidadEnvase;
    document.getElementById("txtPrecio").value = '$ ' + pro.PrecioCompra;
    document.getElementById("txtPrecioVen").value = '$ ' + pro.PrecioUnitario;
    document.getElementById("txtCodBar").value = pro.CodigoBarras;
    document.getElementById("cmbEstado").value = pro.Estado;
    document.getElementById("txtIndicaciones").value = pro.Indicaciones;
    document.getElementById("txtContraindicaciones").value = pro.Contraindicaciones;
    document.getElementById("txtRutaImg").value = pro.RutaImagen;
    
    setDetalleProductosVisible(true);
}
function buscarPosicionProducto(idProducto) {

    for (let i = 0;
    i < productos.lenght; i++) {
        if (productos[i].id === idProducto) {
        }
        return i;
    }
    return -1;
}

export function setDetalleProductosVisible(valor) {

    if (valor === true) {
        //Ocultamos la seccion del catalogo de empleados
        document.getElementById("divCatalogoProductos").style.display = 'none';

        //mostramos la seccion de detalle
        document.getElementById("divDetalleProductos").style.display = '';
    } else {
        //mostramos la seccion de detalle
        document.getElementById("divDetalleProductos").style.display = 'none';

        //Ocultamos la seccion del catalogo de empleados
        document.getElementById("divCatalogoProductos").style.display = '';
    }
}