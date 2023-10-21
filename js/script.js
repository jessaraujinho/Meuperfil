// tres constantes para referenciar as ITEM nas div do projeto
const luan= document.getElementById('Luan');
const site= document.getElementById('Nãoépecado');
const port= document.getElementById('Meuamor');

const videoLuan = document.querySelector('.videoLuan');
const videoNãoépecado = document.querySelector('.videoNãoépecado');
const videoMeuamor = document.querySelector('.videoMeuamor');

//evento de click
form.addEventListener('click',() =>(
    form.classList.toggle('active');
    videoLuan.classList.toggle('active');
    videoMeuamor.classList.toggle('active');
    videoNãoépecado.classList.toggle('active');
));