/*
Crear una pagina que permita al usuario ingresar el numero de inicio 
y final de opciones en una lista.

Información:

    Requisitos:

        -Recibir dos números.
        -Mostrar una lista desde el primer
            número ingresado hasta el último.
            
    Front:
        
        -Titulo.
        -Ingreso de números.
        -Boton para enviar la información.
        -Respuesta visual en forma de lista.

    Lógica:

        -Calcular el rango de números entre los dos ingresados.
        -Hacer automática la lista.

*/

// (Agregado)Limpia la lista y los campos donde se ingresa el texto.
// No consigo que tome los ids de los imputs.
function limpiar(){
    document.querySelector("#numero_minimo").innerHTML = ``;
    document.querySelector("#numero_maximo").innerHTML = ``;
    document.querySelector("#lista_generada").innerHTML = ``;
    document.querySelector("#gen_lista").innerHTML = `Generar lista`;
}

function generarLista() {

    let minimo = Number(document.querySelector("#numero_minimo").value)
    /*
    document.querySelector(`#op${minimo}`).innerHTML = `Opcion ${i}`;
        Accedo a un elemento que no existe porque la lista aún no se generó.
    */
    let maximo = Number(document.querySelector("#numero_maximo").value)
    //document.querySelector(`#op${maximo}`).innerHTML = `Opcion ${i}`; 

    // Limpio la lista para que cada generacion sea única.
    document.querySelector("#lista_generada").innerHTML = ``;

    if (minimo < maximo) {

        for (let i = minimo; i <= maximo; i++) {
            document.querySelector("#lista_generada").innerHTML += `
        <option id="op${i}">Opcion ${i}</option> 
        `;
        }
    }
    else{
        for (let i = maximo; i <= minimo; i++) {
            document.querySelector("#lista_generada").innerHTML += `
        <option id="op${i}">Opcion ${i}</option> 
        `;
        }
    
    }
    // (Agregado) Cambia el nombre del boton asociado a la función generarLista().
    // Recupera su nombre original cuando se llama a la función limpiar().
    document.querySelector("#gen_lista").innerHTML = `Refrescar`;
}

















