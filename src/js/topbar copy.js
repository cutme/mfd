import { gsap, power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);

    let desktop = true, topbar;

    const checkWidth2 = function() {
        
        if (window.innerWidth <= 1023) {
            if (desktop === true) {
                
                if (topbar !== undefined) {
                    ScrollTrigger.getById("vision").kill(true);                
//                    document.getElementById('vision').getElementsByClassName('o-right__page')[0].removeAttribute('style');
                    desktop = false;
                
                    console.log('disable gsap topbar');
                }
            }
            
        } else {
            //if (desktop === false) {
            
                //document.getElementById('vision') ? init() : false;
            
                init();
                desktop = true;
           // }
        }
    };
    


    const init = function() {
        
        topbar = ScrollTrigger.create({
            trigger: ".js-topbar",
            start: "top top", 
            pin: true, 
            markers:true,
            endTrigger:"html",
            end:"bottom top"
        });
    


        
/*
        const topbar = document.getElementsByClassName('js-topbar')[0];
        
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
*/
    };
    
    window.addEventListener('resize', checkWidth2);
    checkWidth2();
    
   // document.getElementsByClassName('js-topbar')[0] ? init() : false;

}, false);