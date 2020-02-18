// document.querySelector('.btn').onclick = function() {
//  let radio = document.querySelectorAll('.citysForChose');
//   for (let i = 0; i < radio.length; i++)
//      if (radio[i].checked){
//     console.log(radio[i].value);
//      }
// };

document.querySelector('.btn').onclick = function bestCitys(){
    let radioBtn = document.querySelectorAll('.citysForChose');
      for(i=0; i < radioBtn.length; i++)
        if (radioBtn[i].checked){
          console.log(radioBtn[i].value);
        }
      
    let paragraf = document.querySelectorAll('p');
    for(i=0; i < paragraf.length; i++){
      paragraf[i].style.color = "blue";
    }
  };

