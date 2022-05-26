// import tabs from './modules/tabs';
// import modal from './modules/modal';
// import calc from './modules/calc';
// import cards from './modules/cards';
// import forms from './modules/forms';
// import slider from './modules/slider';
// import timer from './modules/timer';
// import { openModal } from './modules/modal';

import '../../node_modules/focus-visible/dist/focus-visible';

// import $ from 'jquery';

import '../scss/main.scss';
import '../index.html';



// window.addEventListener('DOMContentLoaded', function () {
//     let element = document.getElementById("box");

//     // element.addEventListener('click', () =>{
//         element.scrollIntoView('#services');
//     // });
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 1600) {
//             $('.pageup').fadeIn();
//         } else {
//             $('.pageup').fadeOut();
//         }
//     });

const menuHTML = document.getElementById('.menu');
const linksHTML = menuHTML.querySelectorAll('a.menu_item');

for (let i = 0; i < linksHTML.length; i++) {
linksHTML[i].addEventListener('click', event => onNavLinkClick(event));
}

function onNavLinkClick(event) {
const href = event.target.getAttribute('href');
const blockId = href.indexOf('#') !== -1 ? href.split('#')[1] : '';

if (!blockId) {
return;
}

document
.getElementById(blockId)
.scrollIntoView({
behavior: "smooth"
});
}

// });
