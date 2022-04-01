const btn = document.querySelector('.btn');
const burgerMenu = document.querySelector('.navbar-toggler');

const popupMessage = () => alert('Hello!');

btn.addEventListener('click', popupMessage);
burgerMenu.addEventListener('click', popupMessage);

// DOM manipulation to select all buttons in the screen
//const btn = document.querySelectorAll('.btn').forEach(btn => btn.onclick = () => alert('Hello!'));