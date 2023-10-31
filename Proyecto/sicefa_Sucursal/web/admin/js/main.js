let cm=null; //current Module
let cmp=null;
async function cargarModuloEmpleado()
{
    //AJAX Asynchronous Java Script and Xml
let respuesta = await fetch('empleado/empleado.html');
let contenido = await respuesta.text();
document.getElementById("divContenedorPrincipal").innerHTML = contenido;

//Despues de cargar el contenido HTML, cargaremos el modulo js del empleado
import ('./empleado.js')
        .then(obj => {
            cm= obj;
    cm.inicializar();
});
}



async function cargarModuloProducto()
{
    //AJAX Asynchronous Java Script and Xml
let respuesta = await fetch('producto/producto.html');
let contenido = await respuesta.text();
document.getElementById("divContenedorPrincipal").innerHTML = contenido;
//Despues de cargar el contenido HTML, cargaremos el modulo js del empleado
import ('./producto.js')
        .then(obj => {
            cmp= obj;
    cmp.inicializar();
});
}


async function cargarModuloClientes()
{
    //AJAX Asynchronous Java Script and Xml
let respuesta = await fetch('cliente/cliente.html');
let contenido = await respuesta.text();
document.getElementById("divContenedorPrincipal").innerHTML = contenido;
//Despues de cargar el contenido HTML, cargaremos el modulo js del empleado
import ('./cliente.js')
        .then(obj => {
            cm= obj;
    cm.inicializar();
});
}


async function cargarModuloVentas()
{
    //AJAX Asynchronous Java Script and Xml
let respuesta = await fetch('venta/venta.html');
let contenido = await respuesta.text();
document.getElementById("divContenedorPrincipal").innerHTML = contenido;
}

async function cargarModuloPedidosdeCompra()
{
    //AJAX Asynchronous Java Script and Xml
let respuesta = await fetch('empleado/empleado.html');
let contenido = await respuesta.text();
document.getElementById("divContenedorPrincipal").innerHTML = contenido;
}

//Para serrar sesion
function logout() {
    window.location.replace('../index.html');
}