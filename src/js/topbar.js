import { gsap, power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);
    
    const topbar = document.getElementsByClassName('js-topbar')[0];
    
    
    const init = function() {
        let scroll_pos = window.pageYOffset || window.scrollY;
            
        let lastScrollTop = 0,
        	partnerAreaLink_visible = true,
        	ww = window.innerWidth, 
        	targetpoint,
        	topbar_status = false;
        
        const action = function() {
	        
            scroll_pos = window.pageYOffset || window.scrollY;
            targetpoint = window.innerHeight - topbar.clientHeight;
            ww = window.innerWidth;

            if (scroll_pos >= targetpoint) {
                if (ww >= 1024) {
    	            if (topbar_status === false) {
    		            topbar.classList.add('is-fixed');
    		            topbar_status = true;
    	            }
    	        }
            }

            else if (scroll_pos < targetpoint) {
	            topbar.classList.remove('is-fixed');
	            topbar_status = false;
            }
        };
        
         window.addEventListener('scroll', action);
    };

   
    topbar ? init() : false;
    
    
   // document.getElementsByClassName('js-topbar')[0] ? init() : false;

}, false);