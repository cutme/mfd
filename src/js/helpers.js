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
            
            const departments = document.getElementsByClassName('js-departments')[0];
            
            if (departments) {
            
                const departments__address = departments.getElementsByTagName('li');
    
                for (let i = 0; i < select.length; i ++) {
    
                    cstSel[i].container.addEventListener('custom-select:open', (e) => { 
                        e.target.parentNode.style.position = 'relative';
                        e.target.parentNode.style.zIndex = '5';
                    });
                    
                    cstSel[i].container.addEventListener('custom-select:close', (e) => { 
                        e.target.parentNode.removeAttribute('style');
                    });
                    
                    // Contact Departments section
                    
                    cstSel[i].select.addEventListener('change', (e) => { 
                        let target = cstSel[i].value;
                        
                        for (let i = 0; i < departments__address.length; i++) {
                            
                            if (departments__address[i].classList.contains('is-active') ) {
                                departments__address[i].classList.remove('is-active', 'is-visible');
    
                                departments__address[target].classList.add('is-active');
                                setTimeout(function() {
                                    departments__address[target].classList.add('is-visible');
                                }, 10);
                            }                        
                        }
                    });
                }
            }
        };
                
        select ? init() : false;
        
    })();
    

}(window, document, window.cutme = window.cutme  || {}));