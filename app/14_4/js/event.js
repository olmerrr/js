// document.querySelector('#one').onclick = function(){
//   console.log('work');
//   console.log(event.target);
//   console.log('---------------');
//   console.log(this);
// }
// document.querySelector('body').onclick = function(){
//   console.log('work_body');
//   console.log(event.target);
// }
// document.querySelector('html').onclick = function(){
//   console.log('work_html');
//   console.log(event.target);
// };

document.onclick = function(event){
  console.log(event.target);
  if (event.target.id =='one'){
    console.log('Вы кликнули на One');
  }
};

document.querySelector('#two').onclick = function(){
  event.stopPropagation(); //останавливаем аследование событий
  console.log('click!');
}
document.querySelector('#three').onclick = function(){
  console.log('click 3!');
}