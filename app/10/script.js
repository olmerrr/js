let block1 = document.querySelector('.block-1');
let block2 = document.querySelector('.block-2');
let block3 = document.querySelector('.block-3');
let btn1 = document.querySelector('.btn-1');
console.log(block1);

block1.classList.add('red'); //добавляем  класс
block1.classList.add('new-border');
block1.classList.remove('new-border');//удаляем класс 
console.log(block1.classList.contains('red'));//проверяет наличие класса


block2.classList.add('blue'); 
if (block2.classList.contains('blue')){
 document.querySelector('.text-input').innerHTML = "You have blue class";
}
//по клику на кнопке я добавляю класс, котрый меняет бекграунд кнопки
 btn1.onclick = function(){
  btn1.classList.toggle('red'); 
};
block3.onclick = function(){
  block3.classList.toggle('blue');
}

//по клику на кнопке я добавляю класс, котрый меняет бекграунд кнопки
