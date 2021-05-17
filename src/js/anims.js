import { gsap, power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);

    window.anims = function() {
        
//        const intro = function() {

        let hero_tl = gsap.timeline({paused: false});
            hero_tl
                   .from('.c-hero article', .9, { opacity: 0, x: 50 })
                   .from('.c-hero h1', .9, { opacity: 0, x: -50 }, '-=.6')
                   .from('.c-hero p', { opacity: 0, duration: .9, x: -50 }, '-=.6')
                   .from('.c-hero .o-btn', { opacity: 0, duration: .9, y: 50 }, '-=.6')
  //      };

        gsap.utils.toArray(".js-fadeIn").forEach(function(section) {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: '-50px bottom',
                    end: 'center 70%',
                    scrub: true,
                    toggleActions: "play reverse play reverse"
                },
                opacity: 0, 
                duration: 1,
                y: 50,
                
            });
        });  
        
        gsap.utils.toArray(".js-zoomIn").forEach(function(elem) {
            
            const blocks = elem.querySelectorAll(".js-item"),
                  tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: elem,
                        end: "center 40%",
                        scrub: 1.2,
                        toggleActions: "play reverse play reverse"
                        },
                    })
                    .from(blocks, {
                        opacity: 0,
                        scale: 1.1,
                        stagger: { 
                            each: 0.1,
                          }
                    });
        });
        
        gsap.utils.toArray(".js-jumpIn").forEach(function(elem) {
            
            const blocks = elem.querySelectorAll(".js-item"),
                  tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: elem,
                        start: "-50px bottom",
                        end: "center center",
                        scrub: true,
                        toggleActions: "play reverse play reverse"
                        },
                    })
                    
                    .from(blocks, {
                        y: 50,
                        stagger: { // wrap advanced options in an object
                            each: 0.2,
                          }
                    });
        });
        
        
/*
        gsap.from('.js-reviewsSlider', {
            scrollTrigger: {
                trigger: '.js-reviewsSlider',
                scrub: 2.2,
                start: 'top bottom',
                end: 'top center'
            },      
            xPercent: 5
        });
        
        gsap.from('.js-knowledgeSlider', {
            scrollTrigger: {
                trigger: '.js-knowledgeSlider',
                scrub: 2.2,
                start: 'top bottom',
                end: 'top center'
            },      
            xPercent: 5
        });
*/
        
        
        
    }

    



}, false)
