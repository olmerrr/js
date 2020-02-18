document.querySelector('.onclick').onclick = function(){
  console.log('click');
};

document.querySelector('.ondblclick').ondblclick = function(){
  console.log('dbblclick');
};

document.querySelector('.mousemove').onmousemove = function(){
  console.log('mouse move');
};
document.querySelector('.onmouseenter').onmouseenter = function(){
  console.log('onmouse enter'); //счетчик заходов на элемент
};
document.querySelector('.onmouseleave').onmouseleave = function(){
  console.log('onmouse leave'); 
};

document.querySelector('.onmousewheel').onmousewheel = function(){
  console.log('onmouse wheel'); //прокрутку колесика мышки считает
};

function test1(){
  console.log(2*2);
}
function test2(){
  return 2/2;
}
console.log(2 * test1());
console.log(2 * test2());