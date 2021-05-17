document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-vision')[0];
    
    const init = function(obj) {

        const slogans = el.getElementsByClassName('js-slogans')[0];
        const info = el.getElementsByClassName('js-info')[0];

        const actionIn = function(e) {
            
            let _that = e.currentTarget;
            let li = info.getElementsByTagName('li');
            
                li[cutme.Helpers.thisIndex(_that)].classList.add('is-active');
                
                setTimeout(function() {
                    li[cutme.Helpers.thisIndex(_that)].classList.add('is-visible');
                }, 100);
        };
        
        const actionOut = function(e) {
            
            let li = info.getElementsByTagName('li');

            for (let i = 0; i < li.length; i++) {
                li[i].classList.remove('is-visible');
                li[i].classList.remove('is-active');
            }
        };

        for( let i = 0; i < slogans.getElementsByTagName('li').length; i ++ ) {
            
            let li = slogans.getElementsByTagName('li')[i];

            li.addEventListener('mouseover', actionIn);
            li.addEventListener('mouseleave', actionOut);
        }
    };


    el ? init() : false;
    
    
}, false);
