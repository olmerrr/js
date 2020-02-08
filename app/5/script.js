//Парные теги 1 способ
document.querySelector('p').innerHTML = "this is 'p' i work witch this paragrapf from JS";
//document.querySelector('p').innerHTML += "this is 'p' i work witch this paragrapf from JS"; // += это дозапись
// document.querySelector('p').innerText = "<b>.innerText</b>"; // innerText выводит и теги <b>
document.querySelector('h1').outerHTML = ' outer?'; //заменяет элемент полностью
document.querySelector('div').insertAdjacentHTML("beforebegin", 22);
document.querySelector('div').insertAdjacentHTML("afterbegin", 12);
document.querySelector('div').insertAdjacentHTML("beforeend", 332);
document.querySelector('div').insertAdjacentHTML("afterend", 3342);
document.querySelector('.one span').innerHTML = 'i can change span';
// 

document.querySelector('title').innerText="newtitle for web-site";
document.querySelector('img').alt="yellow duck";
console.log(document.querySelector('img').src);
document.querySelector('img').src="https://cdn3.iconfinder.com/data/icons/animal-40/128/Animal_Koala-48.png";
document.querySelector('img').alt="brown koala";


console.log(document.querySelector('link').href);// можно менять стили, например если нужно сменить цветопередачу для людей с ограниченным зрением
// let link = document.querySelector('link').href="style-2.css";


document.querySelector('#btn').onclick = changeStyle;
  function changeStyle(){
    let change = document.querySelector('link').href="style-2.css";
  }

document.querySelector('.input-range').type = "text";