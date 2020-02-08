// let a = -212;

// if (a > 0 && a <= 20){
//   console.log('1');
// }
// else if(a > 20 && a <= 30) {
//   console.log('2');
// }
// else {
//   console.log('no have');
// }


let r = Math.random(); //создаю случайное число от 0.1 до 0.9
r = r * 10;   //умножаю его чтобы получить целую часть (1.222)
r = Math.round(r);//округливаю до целого числа
// console.log(r);

let userNum = document.querySelector('#user-num'); //создаю переменную чтобы принемать числа из инпута
document.querySelector('#btn').onclick = checkNum; //при клике на кнопку с айди btn запускается функция checkNum

function checkNum(){
  let num = userNum.value; //создаю переменную которую связываю с ранее созданной переменной userNum и добавляю метод value чтобы читать информацию с инпута
  num = parseInt(num);// добавляю методом parseInt проверку чтобы из переменной num брать только числа
  console.log(num);

  if (isNaN(num)){// добавил проверку методом inNaN, он проверяет это число или нет
      alert("Введите корректное число ");
  }
  else{
    if(num == r){// сверяем загаданное число
      alert("Заганное число было: " + r + " Вы угадали! ");
      location.reload();// если угадали страница перезагружается
    }
    else{
      alert("попробуйте еще раз.. ");
      
    }
  }
}