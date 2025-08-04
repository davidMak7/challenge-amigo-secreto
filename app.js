// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
  // Tu código aquí
  let amigo = document.getElementById('amigo').value;
  if (typeof amigo === 'string' && amigo.trim() !== '') {
    listaAmigos.push(amigo.trim());
    console.log(`Amigo ${amigo} agregado correctamente.`);
  }
  mostrarAmigos();
}

function mostrarAmigos() {
  // Tu código aquí
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpiar la lista antes de mostrar los amigos
  if (listaAmigos.length === 0) {

    console.log('No tienes amigos.');
  } else {
    console.log('Tus amigos son:');
    listaAmigos.forEach((amigo, index) => {
    document.getElementById('listaAmigos').innerHTML += `<li>${index + 1}. ${amigo}</li>`;
    })
  };
}