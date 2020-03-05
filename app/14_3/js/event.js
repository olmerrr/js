let one = document.querySelector('#one');

function myClick(){
  console.log('Click');
  one.onclick = null;
  
  let two = document.querySelector('#two');
  two.onclick = myClick2;

}

function myClick2(){
  console.log(2222);
  let two = document.querySelector('#two');
  two.onclick = myClick3;
}

function myClick3(){
  console.log('work MyClick-3');
}

one.onclick = myClick;