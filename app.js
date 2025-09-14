'use strict';

/* 1. Array para almacenar los nombres */
let amigos = [];

/* 2. Agregar amigos (captura, validación, push, limpiar input) */
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById('amigo');
  const nombre = (input.value || '').trim();

  // Validar la entrada
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = '';

  // Refrescar UI
  actualizarLista();
  limpiarResultado();
  toggleBotonSorteo();
}

/* 3. Visualizar la lista  */
function actualizarLista() {
  // Obtener el elemento de la lista
  const lista = document.getElementById('listaAmigos');

  // Limpiar la lista existente
  lista.innerHTML = '';

  // Iterar sobre el arreglo y agregar <li> por cada amigo
  let items = '';
  for (let i = 0; i < amigos.length; i++) {
    items += `<li>${amigos[i]}</li>`;
  }
  // Agregar elementos a la lista )
  lista.innerHTML = items;
}

/* Pequeña ayuda para limpiar el resultado de sorteo */
function limpiarResultado() {
  const zona = document.getElementById('resultado');
  zona.innerHTML = '';
}

/* 4. Sorteo aleatorio (validar, índice con Math.random + Math.floor) */
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert('Agrega al menos un nombre antes de sortear.');
    return;
  }

  // Generar un índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const elegido = amigos[indice];

  // Mostrar el resultado 
  const zona = document.getElementById('resultado');
  zona.innerHTML = `<li>Amigo secreto: ${elegido}</li>`;
}


document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('amigo');

  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });

  toggleBotonSorteo();
});

function toggleBotonSorteo() {
  const btn = document.querySelector('.button-draw');
  if (btn) btn.disabled = amigos.length === 0;
}

/*  5. Exponer funciones  */
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
