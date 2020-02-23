document.querySelector('.btn').onclick = function() {
 //данные из text input
 console.log(document.querySelector('.text-input').value);

  //данные из pass input
 console.log(document.querySelector('.pass-input').value);



   //данные из range input
   console.log(document.querySelector('.range-input').value);



      //данные из date input
      console.log(document.querySelector('.date-input').value);

        //данные из color input
        console.log(document.querySelector('.color-input').value);

   //данные из Checkbox input
   console.log(document.querySelector('#checkbox-input').checked);
    if (document.querySelector('#checkbox-input').checked){
      console.log('yes, you make you chose');
    }
      else{
        console.log('no, you did not');
      }
   //данные из Radio btn
      // console.log(document.querySelector('#radio-btn').value);





  // console.log('fucn work');


}