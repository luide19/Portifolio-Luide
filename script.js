
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

//Noturno

  const chk = document.getElementById('chk')
  
  chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
  })