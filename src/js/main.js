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
// });

//Hidden menu

const hamburger = document.querySelector('.hamburger'),
  hiddenmenu = document.querySelector('.hiddenmenu'),
  hiddenmenulink = document.querySelector('.hiddenmenu__list'),
  closeElem = document.querySelector('.hiddenmenu__close'),
  closeThankyou = document.querySelector('.modal__close');

hamburger.addEventListener('click', () => {
  hiddenmenu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  hiddenmenu.classList.remove('active');
});

hiddenmenulink.addEventListener('click', () => {
  hiddenmenu.classList.remove('active');
});

//hover
// hamburger.addEventListener('focus', () => {
//   hamburgerSpan.classList.add('onhover');
// });
// ,
//   hamburgerSpan = document.querySelector('.hamburger span')

//Slow scroll main menu

const menuHTML = document.getElementById('menu');
const linksHTML = menuHTML.querySelectorAll('a.menu_link');

for (let i = 0; i < linksHTML.length; i++) {
  linksHTML[i].addEventListener('click', event => onNavLinkClick(event));
}

function onNavLinkClick(event) {
  event.preventDefault();
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

// $(document).ready(function () {
// // // Smooth scroll and page up
// // $(window).scroll(function () {
// //     if ($(this).scrollTop() > 1600) {
// //         $('.pageup').fadeIn();
// //     } else {
// //         $('.pageup').fadeOut();
// //     }
// // });


// //Mail sender
// $('form').submit(function (e) {
//     e.preventDefault();

//     // if (!$(this).valid()) {
//     //     return;
//     // }

//     $.ajax({
//         type: "POST",
//         url: "mailer/smart.php",
//         data: $(this).serialize()
//     }).done(function () {
//         $(this).find("input").val("");
//         // $('#consultation, #order').fadeOut();
//         $('.overlay__thankyou, #thanks').fadeIn('slow');

//         $('form').trigger('reset');
//     });

//     closeThankyou.addEventListener('click', () => {
//         $('.overlay__thankyou, #thanks').fadeOut();
//     });

//     return false;
// });
// });
