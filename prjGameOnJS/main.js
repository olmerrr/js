var riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это съедобное', 'это фрукт'],
  tries: 3,
  checkAnswer(str) {
      // TODO: написать логику проверки правильного ответа
      // alert для пользователя, console.log()

      if (this.tries < 1) {
        console.log('Игра закончилась((');
        return alert('Игра закончилась((');
      } 

      if (str.toLowerCase().includes(this.correctAnswer)) {
        console.log('Правильно');
        alert('Правильно');
      } else {
        console.log('Не правильно');
        alert('не правильно;(');
        this.tries--;

      const hint = this.hints[this.tries === 2 ? 0 : 1];
      if (this.tries) {
        console.log('Подсказка: ' + hint)
        alert('Подсказка: ' + hint);
      }
      else {
        alert('game over...')
      }
    }  
      
  },
}

window.onload = function() {
  document.getElementById('riddle').innerText = riddle.question;
}

function check() {
  var input = document.getElementsByTagName('input')[0];

  var guessedAnswer = input.value;
  
  if (guessedAnswer) {
      // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ\
      riddle.checkAnswer(guessedAnswer);
      
      
  }
}