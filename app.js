// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let ulListaDeAmigos = document.getElementById('listaAmigos');
let ulResultado = document.getElementById('resultado');

function agregarAmigo() {
    //obtener lo ingresado por el usuario
    let valorUsuario = document.getElementById('amigo').value 

    console.log(valorUsuario);
    console.log(listaDeAmigos);
    
    //Si el campo esta vacio
    //Si el valor es valido
    //Limpiar campo de entrada

    if(valorUsuario == '') {
        alert('Por favor, inserte un nombre');
    } else {
        listaDeAmigos.push(valorUsuario);
        //ulListaDeAmigos.innerHTML = ulListaDeAmigos.innerHTML + valorUsuario;
        ulListaDeAmigos.innerHTML += `<li>${valorUsuario}</li>`;
        limpiarCampo();
    }
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if(listaDeAmigos.length < 3) {
        alert('Necesitas ingresar por lo menos 3 amigos para hacer un sorteo');
        return;
    }
    let numeroAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
    let amigoSecreto = listaDeAmigos[numeroAleatorio];

    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

}
