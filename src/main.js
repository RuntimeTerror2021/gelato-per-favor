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