// ------------------BASIC ARROW FUNCTION------------------

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



// """""ES6 system-2""""""""": it's method use multiline value return. return keyword this mandatory in this system
// In this system variable name also used as function name
const sum4 = (num1, num2) => {
  const result = num1 + num2;
  return result;
};

console.log(sum4(70, 80));



// --------------------MORE ARROW FUNCTION------------------------


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


// -----------Spread operator, array max, copy arrays-------------------

// """""""""""ES6 SPREAD OPERATOR""""""" used if we want only the array value from this array we can used 
const friends= ['abul','kabul',"sabul",'babul']
console.log(friends);     // return full array with syntax
console.log(...friends);//its return only the valud used by spread operator(...arrayName)


// we can create a new array with another arrays only which is accessed by Spread Operator and not take any inner array
const newArray= ["hashem", ...friends]; 
console.log(newArray);//its return a fully new array which hasn't any inner array

// if we don't used Spread Operator to create an new array its create array but with an inner array
const newArray1= ["hashem",friends]; 
console.log(newArray1);//its return with an inner array


// we can apply Math.Max() operator in an array when we used SPREAD OPERATOR either not
const numbers=[10,14,67,56,456,980,234]
console.log(Math.max(numbers))//its return NAN
console.log(Math.max(...numbers));//yes,it return max value




// --------------------Object and Array Destructuring----------------------------

// destructuring used kora hoy tkn jkn  kuno array/object er moddhokar element ke ekta variable e store  korar dorkar hoy

// const {peoperty value dite hobe}=person;
// const [index onujay variable name dite hobe]=person1;

// OBJECT DESTRUCTURE
const person={
  name:'tariqul',
  age: 21,
  department: "CST",
  institute: "KPI"
}
// we can replace with 1 line used DESTRUCTURE method
// const personName=person.name; 
// const personAge=person.age; 

//Below method called DESTRUCTURE METHOD,ekane object e property name dite hobe na hoy return korbe na undefined but property value dewar somoy serial maintain kora lage na 
const {age,department,name}=person;
console.log(department)


// ARRAY DESTRUCTURE
const person1=['manna','bapparaj','don','misha']
// we can replace with 1 line used DESTRUCTURE method
// const firstperson=person1[0]
// const Secondperson=person1[1]
const [actinoBoy,sadBoy,gunda,gundaPro]=person1; //ekane array index onujayi variable er name dite nahoy ekta arektar jaygay store hoye jabe
console.log(sadBoy)


// --------------OBJECT Keys, values, entries, seal, freeze----------------------------------


const person2={
    name:'Special One',
    age: 17,
    college:'gurudayal'
}
console.log(person2)
person2.village= 'haidhonkhali'; //its line add a property name and value in person
console.log(person2); //its return person2 object with village property and value 

Object.seal(person2); //ekn person2 te kuno value add kora jabe na but change kora jabe 

Object.freeze(person2); //ekn person2 te kuno value change o kora jabe na and add o kara jabe na  

//Below 2 lines return keys and values array dividedly
// console.log(Object.keys(person2)); //its return return key/property name array
console.log(Object.values(person2));  ////its return return values array

// its return every property name and value in an array dividedly
console.log(Object.entries(person2));





// --------------------Loop through an object using for in, for of, object entries------------------------


const person3={
  name:'batashi',
  age: 12,
  country:'Bangladesh'
}

// below these 2 method how we can access object property value
// console.log(person3.name)
// console.log(person3['name'])


// object directly forOf loop chole na forIn kora lage

for (const key in person3) {
//  console.log(key); its return person3 object keys
console.log(`${person3[key]}`);//its return values of person3 but its must be stay in backtick(' ')
console.log(` key: ${key} value: ${person3[key]}`); //its return person3 objects keys and value both
}

console.log(Object.entries(person3)); //eti ekti boro array te keys and valuse onujayi ekti array return kore

// amra indirectly for of loop use korte parii. Ajonno every propety and value ke alada array te ante hobe Object.entried(objectName) use kore
for (let [key,value] of Object.entries(person3)) {
  // console.log(key); //we found every object keys and value diveided array for of loop. if we assign variable name only key
console.log(` key: ${key} value: ${person3[key]}`); //its return person3 objects keys and value both but ekane dekte hobe forOf loop e variable ke [key,value] hisabe set kora hoyeche kina and let dewa hoyce kna
}