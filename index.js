// 1. Sticky navbar on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 2. Fade-in sections on scroll
const faders = document.querySelectorAll('.section');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(section => {
    appearOnScroll.observe(section);
});

// Scroll reveal for elements with class "reveal"
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 80;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // reveal immediately on page load if visible

let navies = document.querySelectorAll('.nav-items')
let document_width = Math.max(
    document.body.clientWidth,
    document.body.scrollWidth
)
let document_height = Math.max(
    document.body.scrollHeight,
    document.body.clientHeight
)
// let log = console.log
let nav = document.getElementById('nav-left')

if (document_width <= 900 || document_height <= 1200) {
    navies.forEach(navy => {
        navy.remove()
    })
    let menu = document.createElement('img')
    menu.src = 'https://up.yimg.com/ib/th/id/OIP.MO13Yb2PjehyQD7s6Lsx_gHaHa?pid=Api&rs=1&c=1&qlt=95&w=121&h=121' // Added Menu Icon Image Here
    menu.className = 'menu-img'
    nav.append(menu)
    menu.addEventListener('click', function(){
        let menu_bar = document.getElementById('menu-bar')
        if (menu_bar.classList.contains('hidden')){
            menu_bar.classList.remove('hidden')
        }else{
            menu_bar.classList.add('hidden')
        }
    })
}
