let select = document.querySelector('#select-1');
// let drink = document.querySelector('input[name="radioBtn-2"]');
// let drinks = document.querySelectorAll('.drinks');


let form = document.querySelector('.form');


let sendForm = document.querySelector('#send-form');
    sendForm.onclick = function(event){
      event.preventDefault(); //отменяет стандартное событие, в данном случае отменяем стандартную перезагрузку страницы когда в Form нажимают на Input type="submit"
      console.log(serialize(form));
};
// console.log(select);
select.onchange = function(){
  console.log(select.value);
};

// console.log(drinks.value);