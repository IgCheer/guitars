// ==================== Menu Burger====================

const menuIcon = document.querySelector('.menu__icon')

const menuBody = document.querySelector('.menu__body')

const menuBodyItems = document.querySelectorAll('.menu__item')

menuIcon.addEventListener("click", function(event){
   
    if (event.target.closest('.menu__icon')){
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
        
    }
    menuBodyItems.forEach((item) => {
        if(menuBody.classList.contains('_active')) {
          item.classList.toggle('_active')
        } else {
            item.classList.remove('_active')
        }

    })
   
})


// ==================== Slider ====================
new Swiper ('.body-customers-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 30,
    keyboard: {
        enabled: true,
        pageUpDown: true,
    },
    speed: 400,
    autoHeight: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },
    effect: 'flip',
   zoom: {
    maxRatio: 1.5,
    
   },
});
