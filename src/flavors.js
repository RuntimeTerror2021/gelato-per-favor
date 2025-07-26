import { app as firebase } from '../firebase-config.js';

const mobileMenu = document.getElementById('mobileMenu');

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuClose = document.getElementById('mobileMenuClose');

mobileMenuBtn.addEventListener('click', () => {

    mobileMenu.showModal();

})

mobileMenuClose.addEventListener('click', () => {

    mobileMenu.close();

})

let filters = [];

const filterChips = document.querySelectorAll('.chip');
filterChips.forEach(filterChip => {

    filterChip.addEventListener('click', () => {

        const allFilter = document.getElementById('all');

        if (filterChip.classList.contains('selected')) {
            filterChip.classList.remove('selected');
            filters.splice(filters.indexOf(filterChip.innerText), 1);
        } else {
            filterChip.classList.add('selected');
            filters.push(filterChip.innerText);
        }

        if (filters.length > 0) {
            allFilter.classList.remove('selected');
        } else {
            allFilter.classList.add('selected');
        }

        

    })

})