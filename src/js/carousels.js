import Swiper, { EffectFade, Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([ EffectFade, Navigation, Pagination, Autoplay, Thumbs ]);


document.addEventListener('DOMContentLoaded',function() {
    
    window.fleet = function() {
	    
	    const swiperNav = new Swiper(document.getElementsByClassName('js-fleetNavSlider')[0], {
    	    freeMode: true,
            slidesPerView: 'auto',
            speed: 500,
            slidesOffsetBefore: 190,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        
        const swiperContent = new Swiper(document.getElementsByClassName('js-fleetContentSlider')[0], {
            slidesPerView: 1,
            speed: 600,
            thumbs: {
              swiper: swiperNav,
            },
            autoHeight: true
        });
    };

    window.value = function() {
        
        const chars = document.getElementsByClassName('js-valuechars')[0];

        const swiperBg = new Swiper(document.getElementsByClassName('js-valueBgSlider')[0], {
            slidesPerView: 1,
            speed: 500,
        });
        
        const swiperContent = new Swiper(document.getElementsByClassName('js-valueContentSlider')[0], {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function(e) {
                    swiperBg.slideTo(e.activeIndex)

                    chars.classList.remove('step-0', 'step-1', 'step-2');
                    chars.classList.add('step-'+e.activeIndex);
                }
            },
            spaceBetween: 30,
            speed: 500,
            slidesPerView: 1,
        });
    };
    
    
    window.services = function() {
        
        const swiperServices = new Swiper(document.getElementsByClassName('js-servicestSlider')[0], {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            speed: 500,
            slidesPerView: 1,
        });
    };

    

}, false)