function slider () {
     // Slider

     let offset = 0;
     let slideIndex = 1;

     const slides = document.querySelectorAll('.offer__slide'),
         slider = document.querySelector('.offer__slider'),
         prev = document.querySelector('.offer__slider-prev'),
         next = document.querySelector('.offer__slider-next'),
         total = document.querySelector('#total'),
         current = document.querySelector('#current'),
         slidesWrapper = document.querySelector('.offer__slider-wrapper'),
         width = window.getComputedStyle(slidesWrapper).width,
         slidesField = document.querySelector('.offer__slider-inner');

     if (slides.length < 10) {
         total.textContent = `0${slides.length}`;
         current.textContent = `0${slideIndex}`;
     } else {
         total.textContent = slides.length;
         current.textContent = slideIndex;
     }

     slidesField.style.width = 100 * slides.length + '%';
     slidesField.style.display = 'flex';
     slidesField.style.transition = '0.5s all';

     slidesWrapper.style.overflow = 'hidden';

     slides.forEach(slide => {
         slide.style.width = width;
     });

     slider.style.position = 'relative';

     const indicators = document.createElement('ol'),
         dots = [];
     indicators.classList.add('carousel-indicators');
     indicators.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
     slider.append(indicators);

     for (let i = 0; i < slides.length; i++) {
         const dot = document.createElement('li');
         dot.setAttribute('data-slide-to', i + 1);
         dot.style.cssText = `
 box-sizing: content-box;
 flex: 0 1 auto;
 width: 30px;
 height: 6px;
 margin-right: 3px;
 margin-left: 3px;
 cursor: pointer;
 background-color: #fff;
 background-clip: padding-box;
 border-top: 10px solid transparent;
 border-bottom: 10px solid transparent;
 opacity: .5;
 transition: opacity .6s ease;
`;
         if (i == 0) {
             dot.style.opacity = 1;
         }
         indicators.append(dot);
         dots.push(dot);
     }

     function onlyDigits(string) {
         return +string.replace(/\D/ig, "");
     }

     next.addEventListener('click', () => {
         if (offset == (onlyDigits(width) * (slides.length - 1))) {
             offset = 0;
         } else {
             offset += +width.slice(0, width.length - 2);
         }

         slidesField.style.transform = `translateX(-${offset}px)`;

         if (slideIndex == slides.length) {
             slideIndex = 1;
         } else {
             slideIndex++;
         }

         if (slides.length < 10) {
             current.textContent = `0${slideIndex}`;
         } else {
             current.textContent = slideIndex;
         }

         dots.forEach(dot => dot.style.opacity = ".5");
         dots[slideIndex - 1].style.opacity = 1;
     });

     prev.addEventListener('click', () => {
         if (offset == 0) {
             offset = onlyDigits(width) * (slides.length - 1);
         } else {
             offset -= onlyDigits(width);
         }

         slidesField.style.transform = `translateX(-${offset}px)`;

         if (slideIndex == 1) {
             slideIndex = slides.length;
         } else {
             slideIndex--;
         }

         if (slides.length < 10) {
             current.textContent = `0${slideIndex}`;
         } else {
             current.textContent = slideIndex;
         }

         dots.forEach(dot => dot.style.opacity = ".5");
         dots[slideIndex - 1].style.opacity = 1;
     });

     dots.forEach(dot => {
         dot.addEventListener('click', (e) => {
             const slideTo = e.target.getAttribute('data-slide-to');

             slideIndex = slideTo;
             offset = onlyDigits(width) * (slideTo - 1);

             slidesField.style.transform = `translateX(-${offset}px)`;

             if (slides.length < 10) {
                 current.textContent = `0${slideIndex}`;
             } else {
                 current.textContent = slideIndex;
             }

             dots.forEach(dot => dot.style.opacity = ".5");
             dots[slideIndex - 1].style.opacity = 1;
         });
     });
}

module.exports = slider;

//  //Slider functionality, для работы убрать класс: .offer__slider-inner
        //  const slide = document.querySelectorAll('.offer__slide'),
        //  activeSlide = document.querySelector('.offer__slider_active'),
        //  nextSlide = document.querySelector('.offer__slider-next'),
        //  prevSlide = document.querySelector('.offer__slider-prev'),
        //  currentSlide = document.querySelector('#current'),
        //  totalSlide = document.querySelector('#total');


        // let i = 0,
        //  numberOfSlides = 3;

        // nextSlide.addEventListener('click', () => {
        //  if (i === 0 || i < numberOfSlides) {
        //      i++;
        //      console.log(i);
        //      hideSlide();
        //      showSlider(i);
        //      curentSlide(i);
        //  }

        // });

        // prevSlide.addEventListener('click', () => {
        //  if (i === 1 || i <= numberOfSlides && i > 0) {
        //      i--;
        //      console.log(i);
        //      hideSlide();
        //      showSlider(i);
        //      curentSlide(i);
        //  }
        // });

        // function curentSlide(i) {
        //  // currentSlide.innerHTML = "";
        //  let f = i + 1;
        //  currentSlide.innerHTML = "0" + f;
        // }



        // function hideSlide() {

        //  slide.forEach(item => {
        //      item.classList.add('hide');
        //      item.classList.remove('show', 'fade');
        //  });

        //  slide.forEach(item => {
        //      item.classList.remove('.offer__slider_active');
        //  });
        // }

        // function showSlider(i) {
        //  slide[i].classList.add('show', 'fade');
        //  slide[i].classList.remove('hide');
        //  slide[i].classList.add('.offer__slider_active');
        // }

        // hideSlide();
        // showSlider(i);