import { app as firebase } from '../firebase-config.js';

const mobileMenu = document.getElementById('mobileMenu');

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuClose = document.getElementById('mobileMenuClose');

const links = document.querySelectorAll('a');

links.forEach(link => {

    link.addEventListener('click', () => {

        mobileMenu.close();

    })

})

mobileMenuBtn.addEventListener('click', () => {

    mobileMenu.showModal();

})

mobileMenuClose.addEventListener('click', () => {

    mobileMenu.close();

})

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const to = 'example@gmail.com';
    const subject = encodeURIComponent("Gelato Ice Cream Inquiry");

    const name = contactForm.fname.value + " " + contactForm.lname.value;
    const message = contactForm.message.value;

    const body = encodeURIComponent(
`
Hello,

${message}

From,
${name}
`
    )

    window.open(`mailto:${to}?subject=${subject}&body=${body}`);

    contactForm.reset();

})