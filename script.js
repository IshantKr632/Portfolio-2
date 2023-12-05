

function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

const typed = new Typed('.text-decorated', {
    strings: ['Website Developing', 'Graphic Deisgning', 'UI/UX Designing'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
