

let showModal = document.querySelector('#show-modal');
  function show(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
  }

 showModal.onclick = show;

 let hidenModal = document.querySelector('#hidden');
  function hidden(){
    let modal = document.querySelector('.modal');
     modal.style.display = 'none';
  }

  hidenModal.onclick = hidden;

let changeColor = document.querySelector('#change-color');
  function change(){
    let modal = document.querySelector('.modal');
    modal.style.background = 'black';
  }
  changeColor.onclick = change;
