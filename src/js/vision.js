document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-vision')[0];
    
    const init = function(obj) {

        const slogans = el.getElementsByClassName('js-slogans')[0],
              slogans_li = slogans.getElementsByTagName('li'),
              info = el.getElementsByClassName('js-info')[0],
              info_li = info.getElementsByTagName('li');
              
        let def_pos;

        const fadeOut = function() {

            for (let i = 0; i < info_li.length; i++) {
                info_li[i].classList.remove('is-visible');
                info_li[i].classList.remove('is-active');
            }
            
            for (let i = 0; i < slogans_li.length; i++) {
                slogans_li[i].classList.remove('is-active');
            }

            clearTimeout(def_pos);
            def_pos = setTimeout(function() {
                let ex = 0;
                
                for (let i = 0; i < info_li.length; i++) {
                    if (info_li[i].classList.contains('is-active')) {
                        ex = 1;
                        break;
                    }
                }

                if (ex != 1) {
                    slogans_li[0].classList.add('is-active');
                    info_li[0].classList.add('is-active');
                    
                    setTimeout(function() {
                        info_li[0].classList.add('is-visible');
                    }, 100);
                } 
                
            }, 500);
        };

        const actionIn = function(e) {
            
            fadeOut();            
            
            let _that = e.currentTarget;
        
            info_li[cutme.Helpers.thisIndex(_that)].classList.add('is-active');
            
            setTimeout(function() {
                info_li[cutme.Helpers.thisIndex(_that)].classList.add('is-visible');
            }, 100);
        };

        for( let i = 0; i < slogans_li.length; i ++ ) {
            slogans_li[i].addEventListener('mouseover', actionIn);
            slogans_li[i].addEventListener('mouseleave', fadeOut);
        }
    };

    el ? init() : false;
    
}, false);
