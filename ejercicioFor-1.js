/*
Crear una pagina que permita al usuario modificar a una opcion para ser
opcion VIP entre 7 opciones.

Informacion:

    Requisitos:

        -Recibir un número entre 1 incluido y 7 incluido.
        -Mostrar una lista donde el número ingresado se le sume la palabra VIP.
            
    Front:
        
        -Titulo.
        -Ingreso del número.
        -Boton para enviar la información.
        -Respuesta visual en forma de lista.

    Lógica:

        -Contar el rango de números de 1 a 7.
        -Hacer automática la lista.

*/

for (let i = 1; i <= 7; i++) {
    document.querySelector("#lista_vip").innerHTML += `
            <option id="opcion${i}">Opcion ${i}</option>
        `;
}

function hacerVip() {

    let i = document.querySelector("#ingreso_numero").value
    document.querySelector(`#opcion${i}`).innerHTML = `Opcion ${i} VIP`;
}





