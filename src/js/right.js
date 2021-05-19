import { gsap, power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);

    let esgTimeline,
        gs = false,
        topbarGsap, 
        topbarHeight = 0,
        valueTimeline,
        visionTimeline;
        
    
    const checkWidth = function() {
        
        setTimeout(function() {
            
        }, 4000);
        
        
        if (gs === true) {
            if (window.innerWidth <= 1023) {            
/*
                if (topbarGsap !== undefined) {
                    ScrollTrigger.getById("topbar").kill(true);                
                    gs = false;
                
                    console.log('disable gsap topbar');
                }
*/
                
                if (visionTimeline !== undefined) {
                    ScrollTrigger.getById("vision").kill(true);                
                    document.getElementById('vision').getElementsByClassName('o-right__page')[0].removeAttribute('style');
                    gs = false;
                }
                
                if (esgTimeline !== undefined) {
                    ScrollTrigger.getById("esg").kill(true);                
                    document.getElementById('esg').getElementsByClassName('o-right__page')[0].removeAttribute('style');
                    gs = false;
                }
                
                if (valueTimeline !== undefined) {
                    ScrollTrigger.getById("value").kill(true);                
                    document.getElementById('value').getElementsByClassName('o-right__page')[0].removeAttribute('style');
                    gs = false;
                }
            }
            
        } else {
            if (window.innerWidth > 1023) {
               
                //document.getElementsByClassName('js-topbar')[0] ? topbar() : false;
                
                
                document.getElementById('vision') ? vision() : false;
                document.getElementById('esg') ? esg() : false;
                document.getElementById('value') ? value() : false;
                gs = true;
            }
        }
    };
    
    const esg = function() {
        gsap.set('#esg .o-right__page', { xPercent: 100 })

        esgTimeline = gsap.timeline({
            scrollTrigger: {
                id: 'esg',
                trigger: "#esg",
                pin: true,
                scrub: 1,
                start: 'top top',
            }
        })
        .to('#esg .o-right__page', { xPercent: 0 })
        .to({}, { duration: 0.5 }) 
    };


    const partnership = function() {
        
        const topbar = document.getElementsByClassName('js-topbar')[0];
        let topbar_height = topbar.clientHeight;
        
        ScrollTrigger.create({
            id: 'partnership',
            trigger: "#partnership",
            start: "top" + " -100%+=" + 104,
            endTrigger: ".c-usps",

            onEnter: function() {
                if (!topbar.classList.contains('is-green')) {
                    topbar.classList.add('is-green');
                }
            },
            
            onEnterBack: function() {
                if (!topbar.classList.contains('is-green')) {
                    topbar.classList.add('is-green');
                }
            },

            
            onLeave: function() {
                console.log('leave');
                topbar.classList.remove('is-green');
            },
            
            onLeaveBack: function() {
                console.log('leave back');
                
                topbar.classList.remove('is-green');
            }            
        });
    };
    
   /*
 const topbar = function() {
        topbarGsap = ScrollTrigger.create({
            id: 'topbar',
            trigger: ".js-topbar",
            start: "top top", 
            pin: true, 
            endTrigger:"html",
            end:"bottom bottom"
        });
    };
*/
    
    const value = function() {
        gsap.set('#value .o-right__page', { xPercent: 100 })

        valueTimeline = gsap.timeline({
            scrollTrigger: {
                id: 'value',
                trigger: "#value",
                pin: true,
                scrub: 1,
                start: 'top top',
                snap: {
    				snapTo: "labels",
                    delay: 0, 
                },
            }
        })
        .to('#value .o-right__page', { xPercent: 0 }).addLabel('value-02')

    };

    const vision = function() {
        gsap.set('#vision .o-right__page', { xPercent: 100 })

        visionTimeline = gsap.timeline({
            scrollTrigger: {
                id: 'vision',
                trigger: "#vision",
                pin: true,
                scrub: 1,
                start: "top top",
                snap: {
    				snapTo: "labels",
                    delay: 0, 
                },
            }
        })
        .to('#vision .o-right__page', { xPercent: 0 }).addLabel('vision-02')
    };
    
/*
    const vision = function() {
        gsap.set('#vision .o-right__page', { xPercent: 100 })

        visionTimeline = gsap.timeline({
            scrollTrigger: {
                id: 'vision',
                trigger: "#vision",
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => '+=100%'
            }
        })
        .to('#vision .o-right__page', { xPercent: 0 })
        .to({}, { duration: 0.5 }) 
    };
*/

    document.getElementById('partnership') ? partnership() : false;
    window.addEventListener('resize', checkWidth);
    checkWidth();

}, false)
