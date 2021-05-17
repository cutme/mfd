import { gsap } from "gsap";
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

    const nav = document.getElementsByClassName('js-nav')[0],
          hamburger = document.getElementsByClassName('js-hamburger')[0],
          menu = document.getElementsByClassName('js-menu')[0],
          menu_item = menu.getElementsByTagName('li');

    const init = function() {

        const action = function(e) {

            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;            
            let target = e.currentTarget.getAttribute('href');
            hideMenu();
            
            target ? window.gototarget(document.querySelector(target)) : false;
        };
       
        const hideMenu = function() {

            enableBodyScroll(nav);
            nav.classList.remove('is-visible');
            hamburger.classList.remove('is-active');

            for (let i = 0; i < nav.length; i ++) {
                nav[i].classList.remove('is-active');
            }
        };

        const showMenu = function(e) {
        
            if (e.currentTarget.classList.contains('is-active')) {
            
                hideMenu();            
            
            } else {
            
                disableBodyScroll(nav);
                nav.classList.add('is-visible');
                hamburger.classList.add('is-active');
            }
        };

       
        // Triggers 

        for (let i = 0; i < menu_item.length; i++) {            
            menu_item[i].getElementsByTagName('a')[0].addEventListener('click', action)
        }
        
        hamburger.addEventListener('click', showMenu);
    };

    nav ? init() : false;

}, false);