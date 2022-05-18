
var NavMobileOpen = document.querySelector(".Nav_icon");
var NavMobileClose = document.querySelector(".Menu_close");
var OverlayMenu = document.querySelector(".Overlay_menu");
var Overlay = document.querySelector(".Overlay");

NavMobileOpen.onclick = function() {
    if(OverlayMenu.style.display === 'block' && Overlay.style.display === 'block'){
        OverlayMenu.style.display = 'none';
        Overlay.style.display = 'none';
    }
    else{
        OverlayMenu.style.display = 'block';
        Overlay.style.display = 'block';
    }
}

function myFunction(NavMobileOpen) {
    NavMobileOpen.classList.toggle('fa-xmark');
}

$(document).ready(function(){
    $('.News_rows').slick({
        slidesToShow: 3,
        arrows: true,
        prevArrow: `<div class="slide-arrow prev-arrow"><img src="./img/bgleft1.png" alt=""></div>`,
        nextArrow: `<div class="slide-arrow next-arrow"><img src="./img/bgright2.png" alt=""></div>`,
        responsive: [
            {
                breakpoint: 844,
                settings: {
                  slidesToShow: 1,
                  arrows: false
                  
                }
            }
        ]
    });
  });