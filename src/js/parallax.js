import { gsap, power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);

    const parallax = document.getElementsByClassName('js-parallax')[0];
    
    const init = function() {


            let bg = parallax.querySelector(".js-img"); 
            
            bg.style.backgroundPosition = `50% ${innerHeight / 2 + 500}px`;
        
            gsap.to(bg, {
                backgroundPosition: `50% ${-innerHeight / 2 + 500}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: parallax,
                    scrub: true,
                }
            });
    };

    parallax ? init() : false;

}, false)
