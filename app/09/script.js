// document.querySelector('.test').onkeypress = function(event){
//   // console.log(event.keyCode);
//   // let a =  event.keyCode;
//   //   if (a == 115){
//   //     console.log("Вы нажали клавишу ' s ' ");
//   //   }


// }
document.querySelector('.test').onkeydown = function(event){
  console.log(this.value.toUpperCase());
 };

let left = 0,
    right = 0;

 document.onkeypress = function(e){
   console.log(e.keyCode);
   let sqr = document.querySelector('.sqr');
   
    if (e.keyCode == 100){
      left = left + 10;
      sqr.style.marginLeft = left + 'px';
    }
 };

 function checkPhoneKey(key) {
  return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
    key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
}