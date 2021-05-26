import { gsap, power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);

    let p = 0;
    let scrollbar = document.getElementsByClassName('js-scrollbar')[0];
    let scrollbar_point = scrollbar.getElementsByTagName('li');
    
    const clearActivePointsOnScroll = function() {
        for (let i = 0; i < scrollbar_point.length; i++) {
            scrollbar_point[i].classList.remove('is-actived');
        }
    }

    const act = function(current_section, dir) {
        if (current_section === 'hero') {
            
            scrollbar.classList.remove('is-visible');
            clearActivePointsOnScroll();
            
        } else {
            
            clearActivePointsOnScroll();

            scrollbar.classList.add('is-visible');            
            scrollbar.getElementsByClassName(current_section)[0].classList.add('is-actived');
        }
        
        //if (dir === 1) {
            if ( (current_section === 'partnership') || (current_section === 'fleet') || (current_section === 'contact') ) {
                scrollbar.classList.add('on-green');
                console.log('green');
            } else {
                scrollbar.classList.remove('on-green');
            }
       // }
        
        
        // exceptions on leave back
        
        if ((current_section === 'partnership') && (dir === -1)) {
            scrollbar.classList.remove('on-green');
            clearActivePointsOnScroll();
            scrollbar.getElementsByClassName('vision')[0].classList.add('is-actived');
        }
        
        if ((current_section === 'value0') && (dir === -1)) {
            clearActivePointsOnScroll();
            scrollbar.getElementsByClassName('esg')[0].classList.add('is-actived');
        }
        
        if ((current_section === 'fleet') && (dir === -1)) {
            scrollbar.classList.remove('on-green');
            clearActivePointsOnScroll();
            scrollbar.getElementsByClassName('value0')[0].classList.add('is-actived');
        }
        
        if ((current_section === 'contact') && (dir === -1)) {
            scrollbar.classList.remove('on-green');
            clearActivePointsOnScroll();
            scrollbar.getElementsByClassName('membership')[0].classList.add('is-actived');
        }
    }

    gsap.utils.toArray(".js-point").forEach(function(section) {
        
        ScrollTrigger.create({
            
            trigger: section,
            start: "top top",

            onEnter: function(e) {
                let current_section = section.id;
                
                console.log(current_section);
                
                act(current_section);
            },
            
            onEnterBack: function() {
                let current_section = section.id;

                act(current_section);
            },
            
            onLeaveBack: function(e) {
                   
                clearActivePointsOnScroll();
                
                let current_section = section.id;
                
                act(current_section, e.direction);                 
            },
        });
        
        p ++;

    });  
/*
    
    
    ScrollTrigger.create({
            
        trigger: '.js-partnership2',
        start: "top bottom-=100%",
        end: 'bottom+=100%',
        
        onLeaveBack: function() {
            console.log("partnership back");
        }        
    });
*/


}, false);