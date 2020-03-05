function f1(){
    let div = document.querySelector('#one');
    div.innerHTML = div.innerHTML + 'Hello';
}
f1();
function f2(){
    let div = document.querySelector('#two');
    div.innerHTML = div.innerHTML + 'Hello';
}
f2();

let c = document.querySelector('#three');
function f3(){
    c.innerHTML += 'Hello';
}
f3();
c =  document.querySelector('#four');
f3();

// *** function//
function f4(idElement){
    let d = document.querySelector('#' + idElement);
    d.innerHTML += ' Its work!';
}
f4('two');
f4('three');

function sum(a,b = 1){ //b = 1 параметр по умолчанию задали ES 6
    // (b) ? b=b : b=1; ES 5
    return a + b;
}
console.log(sum(4));
console.log(sum(4,6));  
// *** function//



