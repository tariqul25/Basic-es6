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



// --------------------------------------MORE ARROW FUNCTION-------------------------------------------------------------------


// ---------------------------------------
const sum5 = (num1, num2) => {
  // console.log(arguments); //its give error
  return num1 + num2;
};
console.log(sum6(20, 60));//eta error dibe because arrow function arguments array return kore na
// -----------------------------------
function sum6(num1, num2) {
  console.log(arguments);
  return num1 + num2;
}
console.log(sum5(5, 9));//eta error dibe na because arrow function arguments array return kore

// """""There are 3 way to define ARROW function""""". these are----

// 1 is: empty parenthesiss
const test = () => console.log("hellow empty");
// console.log(test())  : its return UNDEFINED cause ekane kuno argument dewa hocche na
// test()        : evabe call korle shudu console log er string ke output dibe

// 2 is : no parenthesiss
const square = (a) => a * a;
console.log(square(5));

// 3 is : with use parenthesiss
const sum7 = (num1, num2) => num1 + num2;
console.log(sum6(5, 6));

