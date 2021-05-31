document.addEventListener('DOMContentLoaded',function() {

//    const cover = document.getElementById('cover');
    
    const init = function() {
        
        
        document.getElementsByClassName('js-fleetNavSlider')[0] ? window.fleet() : false;
        document.getElementsByClassName('js-valueBgSlider')[0] ? window.value() : false;
        
        document.getElementsByClassName('js-servicestSlider')[0] ? window.services() : false;
        
        document.getElementById('contact') ? window.contact() : false;
        document.getElementById('fleet2') ? window.fleet2() : false;
        
  //      document.documentElement.removeAttribute('style');
    //    document.documentElement.classList.add('is-loaded');

        //window.anims();

/*
        setTimeout(function() {
            cover.remove();
            document.documentElement.classList.add('is-ready');
            
            document.getElementsByClassName('js-flyNav')[0] ? window.faqNav() : false;
            
            document.getElementsByClassName('js-reviewsSlider')[0] ? window.reviews() : false;
            document.getElementsByClassName('js-knowledgeSlider')[0] ? window.knowledge() : false;
            document.getElementsByClassName('js-partnersSlider')[0] ? window.partners() : false;
            document.getElementsByClassName('js-serviceSlider')[0] ? window.service() : false;
            
            document.getElementsByClassName('js-rangeslider').length > 0 ? window.rangeslider() : false;
            
        }, 250);  
*/
    };
    
    window.addEventListener('load', init);

}, false);