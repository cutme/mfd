import { gsap } from "gsap";
import { ScrollToPlugin, Power4 } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

document.addEventListener('DOMContentLoaded',function() {

    window.gototarget = function(src, off) {
        
        document.documentElement.classList.add('no-anim');

        let target = src,
            topbar_height = document.getElementsByClassName('js-topbar')[0].clientHeight,
            offset = 0;
            
        if (off != undefined) {
            offset = off;
        } else {
            offset = topbar_height;
        }
        
        const action = function(obj) {            
            
            if (obj) {
                target = obj;                
            } 

            gsap.to(window, { 
                duration: 2, scrollTo: { 
                    y: target, 
                    offsetY: offset
                }, 
                ease: Power4.easeOut,
                onComplete: function() {
                    setTimeout(function() {
                        document.documentElement.classList.remove('no-anim');
                    }, 1000)
                    
                }
            });
        };

        action();
    };
 
}, false);