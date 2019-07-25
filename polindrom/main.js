function palindrom(str){
    //строку в нижний регистр
    str = str.toLowerCase();
    //переводим строку в массив
    let str2 = str.split('');
    str2 = str2.reverse('');    
    str2 = str2.join('');
    
    if (str == str2) 
        return true;
         else return false;
     return str2;







    }

console.log(palindrom('abba'));
