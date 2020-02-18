document.querySelector('.btn').onclick = function() {
 
   //данные из Radio btn
      // console.log(document.querySelector('#radio-btn').value);

  let radio = document.querySelectorAll('.radio-input');

// console.log(radio);

  for( let i = 0; i < radio.length; i ++){
    console.log(radio[i].checked);
    if (radio[i].checked){
      console.log(radio[i].value);
    }
  }
}//radio это имя переменной

document.querySelector('.chose').onclick = chose;
function chose(){
  let radioBtn = document.querySelectorAll('.drinks');
  // console.log(radioBtn);

  for ( let i = 0; i < radioBtn.length; i++){
    if(radioBtn[i].checked){
      console.log(radioBtn[i].value);
    }
  }

}



 let changeColor = document.querySelector('.change-color').onclick = change;
  function change(){
    let zoo = document.querySelectorAll('.animals');
    for(let i = 0; i < zoo.length; i++){
      zoo[i].style.color = 'red';
    }
  } 
 let select = document.querySelector('.select').onclick = function(){ 
  let option = document.querySelectorAll('#my-select option');

    console.log(option);
    for ( let i = 0; i < option.length; i++) {
      // console.log(option[i].selected);
      if (option[i].selected){
        console.log(option[i].value);
        //console.log(option[i].innerHTML);// innerHTML добавит в консоль номер строки списка
      }
    }
  }