


async function cargarModuloSucursales()
{
    //AJAX Asynchronous Java Script and Xml
let respuesta = await fetch('sucursales/sucursales.html');
let contenido = await respuesta.text();
document.getElementById("divContenedorPrincipal").innerHTML = contenido;

//Despues de cargar el contenido HTML, cargaremos el modulo js de Sucursales
import ('./sucursales.js')
        .then(obj => {
            cm= obj;
    cm.inicializar();
});
}

async function cargarModuloProducto()
{
    //AJAX Asynchronous Java Script and Xml
let respuesta = await fetch('productos/productos.html');
let contenido = await respuesta.text();
document.getElementById("divContenedorPrincipal").innerHTML = contenido;
 //Despues de cargar el contenido HTML cargar el  modulo js del empleado
    import('./productos.js')
            .then(obj => {
                cm = obj;
                cm.inicializar();
            });
}


async function cargarModuloCompra()
{
    //AJAX Asynchronous Java Script and Xml
let respuesta = await fetch('pedidos/pedidos.html');
let contenido = await respuesta.text();
document.getElementById("divContenedorPrincipal").innerHTML = contenido;
import('./pedidos.js')
            .then(obj => {
                cm = obj;
                cm.inicializar();
            });
}


//Para serrar cesion
function logout() {
    window.location.replace('../index.html');
}

async function regresar()
{
 let respuesta = await fetch('../../../sicefa_Sucursal/web/index.html');
let contenido = await respuesta.text();
document.getElementById("divContenedorPrincipal").innerHTML = contenido;
    
}