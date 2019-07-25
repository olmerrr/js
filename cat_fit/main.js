


var foodInGrams  = prompt("Сколько грамм кот Феликс сьел корма? ", '');
var sleepInHours  = prompt(" А сколько часов спал  кот Феликс? ", '');

var jumps;
 	jumps = (foodInGrams/3.33333333333)|0;
var  pulls;
 	pulls = sleepInHours * 2;
var runs;
 	runs =(jumps)+pulls / 2;




alert("Феликс, если Вы сьели " +
 	foodInGrams + " грамм корма -  значит, должны сделать " + 
 	jumps + " прижков на шкаф, а если Вы спали  " + sleepInHours
  + " часов, то обязаны сделать " + pulls +
   " подтягиваний на куртке хозяина. Так же можно пробежать кросс по комнате в "
    + runs + " кругов. Решать Вам)");

if  (foodInGrams < 10)
  {
  	alert("Голодовка это не выход!");
  } 

if  (sleepInHours < 2)
  {
  	alert("Бессонница?");
  } 