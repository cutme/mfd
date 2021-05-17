document.addEventListener('DOMContentLoaded', function() {
        
    const contactbar = document.getElementsByClassName('js-contactbar')[0];
        
    const init = function() {
        
        const footer = document.getElementsByClassName('js-footer')[0];
        let ww = 0, margin = false;

        const action = function() {
            ww = window.innerWidth;
            
            if (ww > 1024) {
                if (margin === false) {
                    contactbar.classList.add('is-fixed');
                    footer.style.marginBottom = contactbar.clientHeight + 'px';
                    margin = true;
                }
                
            } else {
                if (margin === true) {
                    footer.style.marginBottom = '0';
                    contactbar.classList.remove('is-fixed');
                    margin = false;
                }
            }
        };
        
        action();
	    window.addEventListener('resize', action);
    };
    
    contactbar ? init() : false;

}, false);