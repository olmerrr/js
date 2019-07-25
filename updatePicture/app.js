const   grayscale = document.querySelector('#grayscale'),
        contrast = document.querySelector('#contrast'),
        brightness = document.querySelector('#brightness'),
        sepia = document.querySelector('#sepia'),
        saturate = document.querySelector('#saturate'),
        img = document.querySelector('#image'),
        reset = document.querySelector('#reset'),
        imgUrl = document.querySelector('#img-url');



        const   defaults = {
            grayscale : 0,
            contrast : 100,
            brightness : 100,
            sepia : 0,
            saturate : 100
}


      grayscale.addEventListener('input', updateFilterValue);
      contrast.addEventListener('input', updateFilterValue);
      brightness.addEventListener('input', updateFilterValue);
      sepia.addEventListener('input', updateFilterValue);
      saturate.addEventListener('input', updateFilterValue);

      reset.addEventListener('click', resetFilterValue);



      function updateFilterValue() {
        
        reset.disabled = false;
        img.style.filter = `

          grayscale(${grayscale.value}%)
          contrast(${contrast.value}%)
          brightness(${brightness.value}%)
          sepia(${sepia.value}%)
          saturate(${saturate.value}%)
        `
      }
    
   function resetFilterValue(){
        console.log("click");

        grayscale.value = defaults.grayscale,
        contrast.value = defaults.contrast,
        brightness.value = defaults.brightness,
        sepia.value = defaults.sepia,
        saturate.value = defaults.saturate;

    

    img.style.filter = `

    grayscale(${defaults.grayscale}%)
    contrast(${defaults.contrast}%)
    brightness(${defaults.brightness}%)
    sepia(${defaults.sepia}%)
    saturate(${defaults.saturate}%)
  `

  reset.disabled = true;
}
imgUrl.addEventListener('change',updateImgUrl);

function updateImgUrl(){
    const imageUrl = imgUrl.value;
    img.setAttribute('src',imageUrl);
    
}

