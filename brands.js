var slides = 1.15;
 
for (i=321; i<=window.innerWidth; i++) {
  slides += 0.004;
}

 var swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: slides,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    }, 
    
  });
   
  if (window.innerWidth>767) {
    swiper.destroy();
  }

  var btnRM = document.querySelector('.brands__button--readmore');
  var list = document.querySelector('.list');
  var elements = list.querySelectorAll('.list__element');
  var btnHD = document.querySelector('.brands__button--hide');
  
  if (window.innerWidth>1119) {
    elements[6].classList.remove('list__element--hidden');
    elements[7].classList.remove('list__element--hidden');
  }

  btnRM.addEventListener('click', function() {

    btnRM.classList.remove('brands__button--show');
    btnHD.classList.add('brands__button--show');

    if (window.innerWidth>1119) {
    for (i = 8; i <  elements.length; i++) {
      elements[i].classList.remove('list__element--hidden');
    } 
  } else {
    for (i = 6; i <  elements.length; i++) {
      elements[i].classList.remove('list__element--hidden');
    } 
  }
  });

  btnHD.addEventListener('click', function() {

    btnHD.classList.remove('brands__button--show');
    btnRM.classList.add('brands__button--show');

    if (window.innerWidth>1119) {
    for (i = 8; i <  elements.length; i++) {
      elements[i].classList.add('list__element--hidden');
   }
  } else {
    for (i = 6; i <  elements.length; i++) {
      elements[i].classList.add('list__element--hidden');
    }
   }  
  });