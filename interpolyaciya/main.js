let name = 'Ivan',
    age = 28,
    email = 'pohka@ukr.net';

    document.write(`Пользователь  ${name} ему  ${age} лет, его эмейл  ${email}`);
    function makeArray(){
        var items = [];
        for (let i = 0; i < 10; i++){
            var item = function() {
                console.log(i);
            };
            items.push(item);
        }
        return items;
    }
var arr = makeArray();
arr[1]();
arr[3]();
arr[7]();



    
    // const ARR = [5, 6];
    // // ARR.push(7);
    // // console.log(ARR); // [5,6,7]
    // ARR = 10; // TypeError
    // ARR[0] = 3; // значение можно менять
    // console.log(ARR); // [3,6,7]

    // var a = 3;
    // {
    //     let a = 2;
    //     console.log(a);
    // }
    // console.log(a);

    // let f = function(a,b) { 
    //     return a+b;
    // };
    // console.log(f(1,2));

    // let f = (a,b) => a+b;
    // console.log(f(1,6));
    
    
    var user = {
        name       : 'John',
        lastName   : 'Smith',
        getFullName: function() {
            console.log(this.name + ' ' + this.lastName);
        }
    }
    user.getFullName();