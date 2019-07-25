let box = document.querySelector('.box'),
    btn = document.querySelector('button');
   
 
 
    let    width = box.offsetWidth,
        height = box.scrollHeight;

    // console.log(width);
    // console.log(height);
    console.log(box.getBoundingClientRect().right);
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

   btn.addEventListener('click',function() {
            box.style.height = box.scrollHeight + 'px';
            box.scrollTop = 0; //прокрутка вверх
            
        });

      
    
