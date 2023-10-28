// 3 constantes para referenciar as ITEM nas div do projeto
const luan = document.getElementById('luan');
const musica = document.getElementById('musica');
const amor = document.getElementById('amor');

// 3 constantes para referenciar as 3iD dos iframe
const videoLuan = document.querySelector('#videoLuan');
const videoMusica = document.querySelector('#videoMusica');
const videoAmor = document.querySelector('#videoAmor');

// evento do click
luan.addEventListener('click', () => {
  luan.classList.toggle('active');
    videoLuan.classList.toggle('active');
});

musica.addEventListener('click', () => {
    musica.classList.toggle('active');
    videoMusica.classList.toggle('active');
});

amor.addEventListener('click', () => {
    amor.classList.toggle('active');
    videoAmor.classList.toggle('active');
});
