//  function User (name, id){
//      this.name = name;
//      this.id = id;
//      this.human = true;
//  }

//  let yaroslav = new User ('Yaroslav',28 );
//  let maxim = new User ('Maxim', 29);

//  console.log(yaroslav);
//  console.log(maxim);

//  User.prototype.exit = function (name) {
//      console.log('Пользователь ' + this.name + ' ушел');

    
//  }
//  maxim.exit();

 //class Animal
//  function Animal(name) {
//     this.speed = 0;
//     this.name = name;
  
//     this.run = function(speed) {
//       this.speed += speed;
//       alert( this.name + ' бежит, скорость ' + this.speed );
//     };
  
//     this.stop = function() {
//       this.speed = 0;
//       alert( this.name + ' стоит' );
//     };
//   };
  
//   var animal = new Animal('Зверь');
  
//   alert( animal.speed ); // 0, начальная скорость
//   animal.run(3); // Зверь бежит, скорость 3
//   animal.run(10); // Зверь бежит, скорость 13
//   animal.stop(); // Зверь стоит
//   'use strict';


//

// function showThis(a, b) {
//   console.log(this);
  
//     function sum(){ 
//       console.log(this)
//       return a + b;
//     }
//     console.log(sum ( ));
// }
// showThis(4,5);
// showThis(5,5);

//1) просто вызов функции либо window либо undefined
//2) метод обьекта - this равен самому обьекту
//

// let obj = {
//   a: 20,
//   b:15,
//   sum: function(){
//     console.log(this);
//       function shout( ){
//         console.log(this);
//       }
//       shout( );
//   }
// };
// obj.sum();




//3) RJycnhernjh (new) - this  равен новый созданый обьект

// let user = {
//   name: "Max"
// };

// function sayName(surName){
//   console.log(this);
//   console.log(this.name + surName);  
// }

// console.log(sayName.call(user, ' Mad'));

// console.log(sayName.apply(user, [' Snow, John Snou, Jack Sparrow'])); //можем привязать целый массив данных





// function count(number) {
//     return this*number;
  
// }

// let double = count.bind(2);
// console.log(double(2));

// 4) указание конкретного контекста с помощью call, apply, bind


let btn = document.querySelector('button');
btn.addEventListener('click',function(){
  console.log(this);
  this.style.backgroundColor = 'red';
  
  function showThis() {
    console.log(this);
  }
  showThis();
});
