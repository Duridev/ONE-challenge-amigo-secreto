// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
const amigo = document.querySelector('.input-name');
const listaAmigos = document.querySelector('#listaAmigos')
const resultado = document.querySelector('#resultado')

const agregarAmigo = () => {
    //validacion
    if(amigo.value.trim() === '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(amigo.value);
        amigo.value = '';

        actualizarAmigos();
    }
};

