import Swiper, { EffectFade, Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([ EffectFade, Navigation, Pagination, Autoplay, Thumbs ]);


document.addEventListener('DOMContentLoaded',function() {
    
    window.fleet = function() {
        
        const content = document.getElementsByClassName('js-fleetContentSlider')[0],
              details = document.getElementsByClassName('js-fleetDetailsSlider')[0],
              nav = document.getElementsByClassName('js-fleetNavSlider')[0];
	    
	    const swiperNav = new Swiper(nav, {
    	    freeMode: true,
    	    slidesOffsetBefore: 20,
            slidesPerView: 'auto',
            speed: 500,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                1025: {
                    slidesOffsetBefore: 190,
                }
            }
        });
        
        if (content) {
            
            const swiperDetails = new Swiper(details, {
                slidesPerView: 1,
                speed: 600,
                autoHeight: true,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
            });
            
            const swiperContent = new Swiper(content, {
                slidesPerView: 1,
                speed: 600,
                thumbs: {
                   swiper: swiperNav,
                },
                autoHeight: true,
                on: {
                    transitionEnd: function() {
                        console.log( swiperDetails.slideTo(swiperContent.activeIndex) );
                    }
                },
            });
        }
    };

    window.value = function() {

        window.swiperValueBg = new Swiper(document.getElementsByClassName('js-valueBgSlider')[0], {
            slidesPerView: 1,
            speed: 500,
        });
        
        window.changeChars = function(index) {
            
            const chars = document.getElementsByClassName('js-valuechars')[0];

            window.swiperValueBg.slideTo(index);
            window.swiperValueContent.slideTo(index);

            chars.classList.remove('step-0', 'step-1', 'step-2');
            chars.classList.add('step-'+index);
            
            console.log(index);
        }
        
        window.swiperValueContent = new Swiper(document.getElementsByClassName('js-valueContentSlider')[0], {
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
                    
                    if (window.innerWidth < 1024) {
                        window.changeChars(e.activeIndex);
                        
                        //swiperValueBg.slideTo(e.activeIndex)
                        //chars.classList.remove('step-0', 'step-1', 'step-2');
                        //chars.classList.add('step-'+e.activeIndex);
                    }
                }
            },
            spaceBetween: 30,
            speed: 500,
            slidesPerView: 1,
        });
    };
    
    window.services = function() {
        
        const el = document.getElementsByClassName('js-servicestSlider')[0],
              nav = el.getElementsByClassName('js-detailsNav')[0];
        
        const swiperServices = new Swiper(el, {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            speed: 500,
            slidesPerView: 1,
            on: {
                init: function(e) {
                    //let idx = e.activeIndex;
                },

                transitionStart: function(e) {
                    let idx = e.activeIndex;
                    
                    if (idx === 0) {
                        nav.classList.add('first-slide');
                    } else {
                        nav.classList.remove('first-slide');
                    }
                }
            },            
        });
    };

}, false)
