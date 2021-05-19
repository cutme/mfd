import GLightbox from '../../node_modules/glightbox/dist/js/glightbox.js';
require('../../node_modules/glightbox/dist/css/glightbox.css');

document.addEventListener('DOMContentLoaded', function() {

    if (document.getElementsByClassName("js-inline").length > 0) {
        const popup = GLightbox({
            selector: ".js-inline",
            closeButton: false
        });
    }
    
    

}, false);
