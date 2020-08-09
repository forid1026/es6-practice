//  function doubleIt(num){
//      return num * 2;
//  }

// const doubleIt = function(num){
//     return num * 2;
// }

//arrow function 

const doubleIt = num => num * 2;
 const result = doubleIt(50);
 console.log(result);


 const add = (num1, num2) => num1 + num2;
 const result2 = add(100, 100);
 console.log(result2);

 const giveFive = () => 5;
 const result3 = giveFive();
 console.log(result3);


 const mathFunction = (x, y) =>{
     const sum = x + y;
     const subs = x - y;
     return sum * subs;
 }
 const total = mathFunction(10, 5);
 console.log(total);
 