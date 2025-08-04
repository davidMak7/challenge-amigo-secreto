// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 
let listaAmigos = [ ];
let cantidadAmigos = 5;

function agregarAmigo() {
  // Tu código aquí
     document.getElementById('resultado').innerText = '';
    if (listaAmigos.length >= cantidadAmigos) { 
        alert(`No puedes agregar más de ${cantidadAmigos} amigos.`);
        document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
        return;
    }else{
    let amigo = document.getElementById('amigo').value;
        if (typeof amigo === 'string' && amigo.trim() !== '') {
            // Verificar si el amigo ya está en la lista
            if (listaAmigos.includes(amigo.trim())) {
                alert(`El amigo ${amigo} ya está en la lista.`);
                return;
            }else {
            listaAmigos.push(amigo.trim());
            }
        }
    }
    actualizarLista();
    document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
    mostrarAmigos();
}

function mostrarAmigos() {
  // Tu código aquí
  
  if (listaAmigos.length === 0) {
    alert(`No tienes amigos. Agrega algunos amigos para comenzar.`);
  } else {
    listaAmigos.forEach((amigo, index) => {
    document.getElementById('listaAmigos').innerHTML += `<li>${index + 1}. ${amigo}</li>`;
    })
  };
}
 
function actualizarLista() { 
    // Tu código aquí
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // actualiza la lista antes de mostrar los amigos
}

function limpiarLista() {
  // Tu código aquí
    listaAmigos = [];   
    actualizarLista();
}


function sortearAmigo() {
  // Tu código aquí
    if (listaAmigos.length === 0) {
        alert(`No tienes amigos. Agrega algunos amigos para comenzar.`);
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    document.getElementById('resultado').innerText = `El amigo sorteado es: ${amigoSorteado}`;
    limpiarLista();
}   
