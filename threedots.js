 const  age = [12, 34, 45];
 const age2 = [23, 34, 45];
 const age3 = [34, 45, 56];
//  const allAge = age.concat(age2).concat(5).concat(age3);
const allAge = [...age, ...age2, 12, ...age3];
 console.log(allAge);

 const number1 = 890;
 const number2 = 900;
 const number3 = 1000;
 const max = Math.max(number1, number2, number3);
 console.log(max); 

 const totalAmount = [10000, 9000, 900];
 const totalMax = Math.max(...totalAmount);
 console.log(totalMax);