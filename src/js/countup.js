import { CountUp } from 'countup.js';
import InView from 'inview';

document.addEventListener('DOMContentLoaded', function() {

    const count = document.getElementsByClassName('js-count');
    
    const init = function() {
        
        const options = {
            duration: 6,
        };
        
        for (let i = 0; i < count.length; i++) {
            const inview = InView(count[i], function(isInView) {
                if (isInView) {
    
                    let demo = new CountUp(count[i], count[i].getAttribute('data-count'), options);
        	    
            	    if (!demo.error) {
                        demo.start();
                    } else {
                        console.error(demo.error);
                    }
                    
                    this.destroy();
    
                }
            });
        }
    };

    count.length>0 ? init() : false;

}, false);
