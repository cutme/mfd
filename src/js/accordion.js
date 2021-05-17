import { gsap, TweenMax, Power4 } from "gsap";


document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-accordion');
    
    const init = function(obj) {

        const details = document.getElementsByClassName('js-serviceDetails')[0];
        const close = obj.getElementsByClassName('js-close');
        const item = obj.getElementsByClassName('js-item');
        
        const toggle = function(ev, section, op) {
            TweenMax.to(section, .5, {
                height: ev,
                opacity: op,
                immediateRender: false,
                ease: Power4.easeOut
            });
        }
        
        
        const action = function(e) {
            
            const _that = e.currentTarget,
                  _height = 0;
                        
            if (_that.classList.contains('is-rollout')) {
                details.classList.remove('is-faded');
                _that.classList.remove('is-rollout');
                toggle(_height, _that.getElementsByClassName('js-section')[0], 0);
                
            } else {
                details.classList.add('is-faded');
                
                for (let i = 0; i < item.length; i ++) {
                    item[i].classList.remove('is-rollout');
                    toggle(_height, item[i].getElementsByClassName('js-section')[0], 0);
                }   
    
                _that.classList.add('is-rollout');
                toggle('auto', _that.getElementsByClassName('js-section')[0], 1);
            }

        };
        
        const action_close = function() {
            //alert('s');
        }
        
        for( let i = 0; i < item.length; i ++ ) {
            item[i].addEventListener('click', action);
            close[i].addEventListener('click', action_close);
            
            
            
            if (item[i].classList.contains('is-rollout')) {
                toggle('auto', item[i].getElementsByClassName('js-section')[0], 1);
            }
        }
    };

    if (el.length > 0) {
        for (let i = 0; i < el.length; i++) {
            init(el[i]);
        }
    }
    
    
    
}, false);
