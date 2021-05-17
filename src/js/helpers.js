import customSelect from 'custom-select';
 
(function(window, document, cutme, undefined) {
    
    const Helpers = function() {
        return {
        	thisIndex: thisIndex
        };
    };

    const thisIndex = function(elm) {
        let nodes = elm.parentNode.childNodes, node, i = 0, count = 0;
    
        while( (node = nodes.item(i++)) && node != elm ) {
            if( node.nodeType == 1 ) count++;            
        }
    
        return count;
    };

    cutme.Helpers = new Helpers();
    

    
    // Select
    
    (function() {
        
        const select = document.getElementsByTagName('select');
    
        const init = function() {
    
            const cstSel = customSelect(select);
/*
            
            const radioAndSelect = function() {
            
                const el = document.getElementsByClassName('js-radioAndSelect');
               
                for (let j = 0; j < el.length; j++) {
    
                    const radio = el[j].getElementsByTagName('input');
        
                    for (let i = 0; i < radio.length; i++) {
                        radio[i].addEventListener('change', function(e) {
                            
                            let changed = el[j].getElementsByClassName('is-changed')[0];
                            changed ? changed.classList.remove('is-changed') : false;
                        });
                    }
                }
            };
*/

            for (let i = 0; i < select.length; i ++) {

                cstSel[i].container.addEventListener('custom-select:open', (e) => { 
                    e.target.parentNode.style.position = 'relative';
                    e.target.parentNode.style.zIndex = '5';
                });
                
                cstSel[i].container.addEventListener('custom-select:close', (e) => { 
                    e.target.parentNode.removeAttribute('style');
                });
                
                cstSel[i].select.addEventListener('change', (e) => { 
                    console.log(e.currentTarget);
                    //e.target.parentNode.parentNode.classList.add('is-changed');

                });
            }
            
            //radioAndSelect();
        };
                
        select ? init() : false;
        
    })();
    

}(window, document, window.cutme = window.cutme  || {}));