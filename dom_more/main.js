



window.addEventListener('DOMContentLoader', function(){

    let box = document.querySelector('.box');


        box.addEventListener('touchstart', function(e){
        e.preventDefault();
    console.log('Yellow box : touchstart ');
    console.log(e.touches);
    console.log(e.changedTouch)
    });

    });