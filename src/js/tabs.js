document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-tabs');
  
    const thisindex = function(elm) {
        let nodes = elm.parentNode.childNodes, node, i = 0, count = 0;
        while( (node = nodes.item(i++)) && node != elm ) {
            if( node.nodeType == 1 ) count++;            
        }
        return count;
    }

    const init = function() {
        
        const showTab = function(idx, contentItem, navItem) {
            for (let i = 0; i < contentItem.length; i ++) {
                
                contentItem[i].classList.remove('is-visible');
                
                setTimeout(function() {
                    contentItem[i].classList.remove('is-active');
                    
                    if (i === idx) {
                        contentItem[i].classList.add('is-active');
                        
                        setTimeout(function() {
                            contentItem[i].classList.add('is-visible');                        
                        }, 150);
                    }
                }, 150);                
            }

            for (let j = 0; j < navItem.length; j ++) {
                navItem[j].classList.remove('is-active');
            }
        };

        for (let i = 0; i < el.length; i++) {
            const content = el[i].getElementsByClassName('js-content')[0],
                  contentItem = content.getElementsByClassName('js-tab'),
                  nav = el[i].getElementsByClassName('js-nav')[0],
                  navItem = nav.getElementsByClassName('js-tab');

            for (let j = 0; j < navItem.length; j ++) {
                navItem[j].addEventListener('click', function() {
                    
                    if (window.innerWidth < 1024) {
                        showTab(thisindex(this), contentItem, navItem);
                        this.classList.add('is-active');
                    }
                });
                
                navItem[j].addEventListener('mouseover', function() {
                    
                    if (window.innerWidth >= 1024) {
                        if (!this.classList.contains('is-active')) {
                            showTab(thisindex(this), contentItem, navItem);
                        }
                        this.classList.add('is-active');
                    }
                });
            }
        }
    }

    el.length > 0 ? init() : false;

}, false);
