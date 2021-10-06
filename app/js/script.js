const btnHamburger = document.getElementById('btnHamburger'); 
const header = document.querySelector('.header');
const body = document.querySelector('body');
const overlayAnim = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener("click", ()=>{
    if(header.classList.contains('open')){ // Close Hamburger Menu
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        fadeElems.classList.add('fade-out');
        fadeElems.classList.remove('fade-in');
    
    }else{ // Close Hamburger Menu
        header.classList.add('open');
        body.classList.add('noscroll');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })
    }
})

