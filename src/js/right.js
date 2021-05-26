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
    
    const topbar = document.getElementsByClassName('js-topbar')[0];
    
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
        const el = document.getElementById('esg2');
        
        gsap.set('#esg .o-right__page', { xPercent: 100 })

        esgTimeline = gsap.timeline({
            scrollTrigger: {
                id: 'esg',
                trigger: "#esg",
                pin: true,
                scrub: 1,
                start: 'top top',
                snap: {
    				snapTo: "labels",
                    delay: 0
                },
                onUpdate: function(e) {
                    console.log(e.progress)
                    
                    if (e.progress >= 0.48) {
                        el.classList.add('is-visible');
                    } 
                },
                
                onLeave: function() {
                    el.classList.remove('is-visible');
                },
                onLeaveBack: function() {
                    el.classList.remove('is-visible');
                },
                onEnterBack: function() {
                    el.classList.add('is-visible');
                },
            }
        })
        .to('#esg .o-right__page', { xPercent: 0 }).addLabel('esg-02')
        .to({}, { duration: 0.5 })
    };

    const partnership = function() {
        
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
                topbar.classList.remove('is-green');
            },
            
            onLeaveBack: function() {
                topbar.classList.remove('is-green');
            }            
        });
    };
    
/*

    let p = 0;
    let scrollbar = document.getElementsByClassName('js-scrollbar')[0];
    let scrollbar_point = scrollbar.getElementsByTagName('li');

    const act = function(current_section) {
        if (current_section === 'hero') {
                    
            for (let i = 0; i < scrollbar_point.length; i++) {
                scrollbar_point[i].classList.remove('is-actived');
            }
            
        } else {
            
            for (let i = 0; i < scrollbar_point.length; i++) {
                scrollbar_point[i].classList.remove('is-actived');
            }
            
            scrollbar.getElementsByClassName(current_section)[0].classList.add('is-actived');
        }
    }

    gsap.utils.toArray(".js-point").forEach(function(section) {
        
        ScrollTrigger.create({
            
            trigger: section,

            onEnter: function(e) {
                let current_section = section.id;
                
                console.log(current_section);
                
                act(current_section);
            },
            
            
            onEnterBack: function() {
                let current_section = section.id;

                act(current_section);
            },
            
            onLeaveBack: function() {
               
                   
                for (let i = 0; i < scrollbar_point.length; i++) {
                    scrollbar_point[i].classList.remove('is-actived');
                }               
            },
        });
        
        p ++;

    });  
    
    
*/    
    const services = function() {
        
        const container = document.getElementById('servicescontainer');
        const viewport = container.getElementsByClassName('js-viewport')[0];
        
        const toggleDetails = document.getElementsByClassName('js-toggleDetails');

        const toggleView = function(e) {
        	e.preventDefault() ? e.preventDefault() : e.preventDefault = false;        	

            if (viewport.classList.contains('details-visible')) {
            	viewport.classList.remove('details-visible')
        	} else {
            	viewport.classList.add('details-visible')
            	window.gototarget(document.getElementById('servicescontainer'));
        	}
        };
        
        for (let i = 0; i < toggleDetails.length; i++) {
            toggleDetails[i].addEventListener('click', toggleView);
        }
    };

    const value0 = function() {
        const el = document.getElementById('value0');

        gsap.from('#value0 .c-value0__photo i', {
            scrollTrigger: {
                trigger: '#value0',
                scrub: 1,
                start: "top bottom-=270%",
                end: 'bottom-=300%',
                onEnter: function() {
                    console.log('enter value0')
                    //el.classList.add('is-visible');
                },
            },      
            opacity: 0,
            yPercent: 100
        });
/*
        
        valueTimeline = gsap.timeline({
            scrollTrigger: {
                id: 'value',
                trigger: "#value0",
                scrub: 1,
                start: "top+=200% center",
                snap: {
    				snapTo: "labels",
                    delay: 0, 
                },
                onEnter: function() {
                    console.log('enter')
                    el.classList.add('is-visible');
                },
 
            }
        })
        .to('#value0 .c-value0__photo', { opacity: 0 }).addLabel('value-00')
        .to({}, { duration: 0.5 })
*/
    };
    
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
                onEnter: function() {
                    if (!topbar.classList.contains('is-lightgray')) {
                        topbar.classList.add('is-lightgray');
                    }
                },
                
                onEnterBack: function() {
                    if (!topbar.classList.contains('is-lightgray')) {
                        topbar.classList.add('is-lightgray');
                    }
                },
                
                onLeave: function() {
                    topbar.classList.remove('is-lightgray');
                },
                
                onLeaveBack: function() {
                    topbar.classList.remove('is-lightgray');
                },
            }
        })
        .to('#value .o-right__page', { xPercent: 0 }).addLabel('value-02')
        .to({}, { duration: 0.5 })
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
                end: "+=100%",
                snap: {
    				snapTo: "labels",
                    delay: 0
                },
            }
        })
        .to('#vision .o-right__page', { xPercent: 0 }).addLabel('vision-02')
        .to({}, { duration: 0.5 }) 
    };

    document.getElementById('partnership') ? partnership() : false;
    document.getElementById('services') ? services() : false;
    document.getElementById('value0') ? value0() : false;
    
    window.addEventListener('resize', checkWidth);
    checkWidth();

}, false)
