// document.querySelector('.block').onclick = function(){
//   console.log('work');
// };

// console.log(document.querySelectorAll('.block'));
let ourBlock = document.querySelectorAll('.block');
// let ourBlock2 = document.getElementsByClassName('block');
// console.log(ourBlock2);

for( let i = 0; i < ourBlock.length; i++){
    ourBlock[i].onclick = one;
  };


// ourBlock.forEach(function(element){
//   element.onclick = function(){
//     console.log('work?')
//   };
// });

// function one(){
//   console.log(this);
// }
function one(){
  console.log(this.innerHTML);
}
// function one(){
//   console.log(this.style.background = "tomato");
// } 