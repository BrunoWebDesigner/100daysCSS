
/* const toggleButton = document.getElementById('searchIcon');
const minhaDiv = document.getElementById('input');

toggleButton.addEventListener('click', () => {
    if (minhaDiv.classList.contains('escondido')) {
        minhaDiv.classList.remove('escondido');
        minhaDiv.classList.add('visivel');
    } else {
        minhaDiv.classList.remove('visivel');
        minhaDiv.classList.add('escondido');
    }
}); */

document.querySelector('.searchIcon').addEventListener('click', function() {
    document.querySelector('.input').classList.toggle('active');
});


document.querySelector('.toggle').addEventListener('click', function() {
    document.querySelector('.frame').classList.toggle('active');
    document.querySelector('.navBar').classList.toggle('active');
});