   var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      breakpoints:{

        0: {
     slidePerView: 1,
        },

        550: {
            slidePerView: 2,

        },

    800: { 
        slidePerView: 3,

    },
    1000: {
        slidePerView: 1,

    },
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    

    //showmenu section

    var navLinks = document.getElementById("navLinks");

    function showMenu(){
      navLinks.style.left = "0";
    }

      function hideMenu(){
        navLinks.style.left = "-400px";
      }
    
