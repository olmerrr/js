
document.querySelectorAll('.modal-show').forEach(function(element){
  element.onclick = showModal;
});


document.querySelectorAll('.modal-close').forEach(function(element){
  //Закрываем окно на кнопке "close"
  element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function(element){
 //Закрываем окно на клике по "серой" области
  element.onclick = closeModal;
});


function showModal(){
  let modalId = this.dataset.modal;
  document.querySelector(modalId).classList.remove('hide');
  document.onkeydown = function(event){//onkeypress отлавливает все клавиши со знаками
     //Закрываем окно на кнопку "escape"

    if (event.keyCode == 27){
      closeModal();
    }
  }
 }

 function closeModal(){
  document.querySelectorAll('.modal-wrap').forEach(function(element){
    element.classList.add('hide');
  });
  document.onkeydown = null;

 }

