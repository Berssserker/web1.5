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

  var buttons = document.querySelectorAll('.brands__button');
  var list = document.querySelector('.brands__list');
  var elements = list.querySelectorAll('.list__element');
  
  if (window.innerWidth>1119) {
    elements[6].style.display= 'flex';
    elements[7].style.display= 'flex';
  }

  
  buttons[0].addEventListener('click', function() {

    buttons[0].style.display = 'none';
    buttons[1].style.display= 'block';
    
     if (window.innerWidth>1119) {
     for (i = 8; i <  elements.length; i++) {
       elements[i].style.display= 'flex';
     } 
   } else {
     for (i = 6; i <  elements.length; i++) {
       elements[i].style.display= 'flex';
     } 
   }
   });

   buttons[1].addEventListener('click', function() {

    buttons[1].style.display = 'none';
    buttons[0].style.display= 'block';
 
    if (window.innerWidth>1119) {
    for (i = 8; i <  elements.length; i++) {
      elements[i].style.display = 'none';
   }
  } else {
    for (i = 6; i <  elements.length; i++) {
      elements[i].style.display = 'none';
    }
   }  
  });