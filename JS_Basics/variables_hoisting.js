/* 
&var: introduced before ES6, they can be declared, initialized, redeclared, reinitialized, declare and intialize
*let: introduced after ES6, they can be declared, initialized, reinitialized, declare and intialize but can not be redeclared
!const: they can only be declare and intialize rest are not possible

HOISTING:
1.Utilizing the data before declaration & initialization is called hoisting
2.Hoisting can be achieved with var variable as it belongs to global scope, where result is undefined
3.Hoisting cannot be achieved with let & const variable as it belongs to script scope

TEMPORAL DEAD ZONE:
1.The time between utilization statement & declaration with initialization statement is called TDZ
2.TDZ is not applicable for var variable
3.TDZ is applicable for let & const where result is uncaught referenceError

GLOBAL EXECUTION CONTEXT:
1.JS engine scans the code for two times and devide into two phases
  a.Variable phase
  b.Execution/Functional phase
2.All the declared variables are in variable phase and only var can be accessed with undefined where let and const will be in TDZ
3.Once the declaration line gets executed they will move to execution phase and value gets initialized
 */
// ? VAR
// ~ declare
var a;

// ~ intialize
a = 10;

// ~ redeclare
var a;

// ~ re-intialize
a = 45

// ~ declare and intialize
var a = 25;

// ? LET
// ~ declare
let b;

// ~ intialize
b = 23;

// ! re-declare
// let b; ERROR

// ~ re-intialize
b = 56;;

// ~ declare and intialize
let c = 89;

// ? CONST
// ! declare
// const a; ERROR

// ! intialize

// ! redeclare

// ! re-intialize

// ~ declare and intialize;
const y = 25;

//!HOISTING

// s() Cannot access 's' before initialization
let s = ()=>{ console.log("hi")}

// r() Cannot access 'r' before initialization
let r = function(){console.log('message')}

// t() t is not a function
var t = ()=>{console.log("message")}

// u() Cannot access 'u' before initialization
const u = function(){console.log('message')}

// console.log(x) x is not defined

/* 
console.log(x) x is not defined
x 
*/

/* 
console.log(x) undefined
var x 
*/

// x() x is not defined
x = ()=>{console.log('message')}