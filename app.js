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

const actualizarAmigos = () => {
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML+= `<li>${amigos[i]}</li>`        
    }
};

const sortearAmigo = () => {
    if (amigos.length > 1) {
        const numeroAleatorio = Math.floor(Math.random() * amigos.length) + 1;
        const amigoGanador = amigos[numeroAleatorio - 1];

        resultado.innerHTML = `${amigoGanador}`
    } else {
        alert('Agregue almenos 2 amigos para comenzar el sorteo');
    }
};