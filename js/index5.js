/*5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 
    
   - сумма a и b; 
    
   - разница между a и b;
  
    - произведение a и b; 
    
    - частное от деления a на b; 
    
    - остаток от деления a на b;  
    
    - результат возведения числа a в степень b;*/

let a = +prompt("Напишите, пожалуйта, одно целое число.");
let b = +prompt("Напишите, пожалуйта, еще одно целое число");
let sum = a + b;
let difference = a - b;
let multiplication = a * b;
let division = a / b;
let surplus = a % b;
let degree = a ** b;

document.write(` <h2> Математические операции с введенными вами числами: <br> <h2> 
<h3> 
1) ${a} + ${b} = ${sum.toFixed(2)} <br>
2) ${a} - ${b} = ${difference.toFixed(2)}  <br>
3) ${a} * ${b} = ${multiplication.toFixed(2)} <br>
4) ${a} / ${b} = ${division.toFixed(2)} <br> 
5) ${a} % ${b} = ${surplus.toFixed(2)} <br> 
6) ${a} ** ${b} =${degree.toFixed(2)}
<h3>`);
