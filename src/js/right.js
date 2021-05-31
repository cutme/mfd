import { gsap, power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);

    let esgTimeline,
        gs = false,
        servicesTimeline,
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
                
                if (servicesTimeline !== undefined) {
                    ScrollTrigger.getById("services").kill(true);                
                    //document.getElementById('services').getElementsByClassName('o-right__page')[0].removeAttribute('style');
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
                document.getElementById('services') ? services() : false;
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
                    if (e.progress >= 0.6) {
                        console.log(e.progress);
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
        .to({}, { duration: 1 }).addLabel('esg-01')
        .to('#esg .o-right__page', { xPercent: 0 }).addLabel('esg-02')
        .to({}, { duration: 1 }).addLabel('esg-03')
    };
    
    window.contact = function() {
        
        ScrollTrigger.create({
            id: 'contact',
            trigger: "#contact",
            start: "top top+=104",
            end: "bottom top+=104",
            onEnter: function() {
                
                console.log('fleet2 onEnter');
                
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
    
    window.fleet2 = function() {
        
        ScrollTrigger.create({
            id: 'fleet2',
            trigger: "#fleet2",
            start: "top top+=104",
            end: "bottom top+=104",
            onEnter: function() {
                
                console.log('fleet2 onEnter');
                
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
    
    const servicesDetails = function() {
        const container = document.getElementById('servicescontainer');
        const viewport = container.getElementsByClassName('js-viewport')[0];
        
        const toggleDetails = document.getElementsByClassName('js-toggleDetails');

        const toggleView = function(e) {
            
            if (e) {
        	    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            }

            if (viewport.classList.contains('details-visible')) {
            	viewport.classList.remove('details-visible')
        	} else {
            	viewport.classList.add('details-visible')
            	
            	if (window.innerWidth < 1024) {
                	window.gototarget(document.getElementById('servicescontainer'));
                } else {
                    window.gototarget(document.getElementById('servicescontainer'), 0);
                }
        	}
        };
        
        for (let i = 0; i < toggleDetails.length; i++) {
            toggleDetails[i].addEventListener('click', toggleView);
        }
    };
  
    const services = function() {
        const container = document.getElementById('servicescontainer');
        const viewport = container.getElementsByClassName('js-viewport')[0];
        
        servicesTimeline = gsap.timeline({
            scrollTrigger: {
                id: 'services',
                trigger: "#services",
                scrub: 1,
                start: 'top top',              
                onEnterBack: function() {
                    console.log('onEnterBack services');
                    
                    if (viewport.classList.contains('details-visible')) {
                    	viewport.classList.remove('details-visible');
                    	window.gototarget(document.getElementById('servicescontainer'));
                    }
                },
            }
        })
    };

    const value0 = function() {
        const el = document.getElementById('value0');

        gsap.from('#value0 .c-value0__photo i', {
            scrollTrigger: {
                trigger: '#value0',
                scrub: 1,
                start: "top bottom-=270%",
                end: 'bottom-=300%',
            },      
            opacity: 0,
            yPercent: 100,
            scaleY: 0
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
                    duration: {min: 0.1, max: 0.5},
                    delay: 1,
                    ease: "none"  
                },
                onEnter: function() {
                    console.log('on enter value');
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
        
        .to({}, { duration: .5 }).addLabel('value-01')
        
        .to('#value .o-right__page', { xPercent: 0 }).addLabel('value-02')

        .to('#value .o-right__page', {  }).addLabel('value-03').add( function() {
            window.changeChars(0);
        })

        .to('#value .o-right__page', {  }).addLabel('value-04').add( function() {
            window.changeChars(1);
        })
        
        .to({}, { duration: 1 }).addLabel('value-04b')
        
        .to('#value .o-right__page', {  }).addLabel('value-05').add( function() {
            window.changeChars(2);
        })
        
        .to({}, { duration: 1 }).addLabel('value-06')
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
        .to({}, { duration: .5 }).addLabel('vision-01')
        .to('#vision .o-right__page', { xPercent: 0 }).addLabel('vision-02')
        .to({}, { duration: 0.5 }) 
    };




    document.getElementById('partnership') ? partnership() : false;
    document.getElementsByClassName('js-toggleDetails').length > 0 ? servicesDetails() : false;
    document.getElementById('value0') ? value0() : false;
    
    window.addEventListener('resize', checkWidth);
    checkWidth();

}, false)
