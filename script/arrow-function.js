// ---------------------------------BASIC ARROW FUNCTION-------------------------------------------------

// js system-1
function sum(num1, num2) {
  return num1 + num2;
}

// const result=sum(10, 30);
// console.log(result);
// console.log(sum(10, 30));

// ----------------------------------

// """"ES6 system-1""""""": it's method only use single line value return. return keyword is not required

const sum3 = (num1, num2) => num1 + num2;

console.log(sum3(20, 30));

// ----------------

// js system-2
const sum2 = function (num1, num2) {
  return num1 + num2;
};
console.log(sum2(30,50));


// --------------
// """""ES6 system-2""""""""": it's method use multiline value return. return keyword this mandatory in this system
// In this system variable name also used as function name
const sum4 = (num1, num2) => {
  const result = num1 + num2;
  return result;
};

console.log(sum4(70, 80));


