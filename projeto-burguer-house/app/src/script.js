const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 20;
    const y = (window.innerHeight / 2 - e.clientY) / 20;

    const img = document.querySelector('.home-img');

    img.style.transform = `translate(${x}px, ${y}px)`;
});