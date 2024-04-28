/*
There are 8 premitive datatypes
1.number
2.bigint
3.boolean
4.string
5.symbol: they were introduced from ES6, the are immutable in nature. They were originally introduced to avoid naming conflicts and maintain uniqness but due to there limitations like reducing readability, trickier to debug and introducing new features like let it lose popularity
6.null: null is considered to be BUG/ERROR in javascript because null belongs to primitive datatype but the typeof null is object.
7.undefined 
8.not_defined
*/

//! number
let a = 10;/* number */
let b = 4.5;/* number */
let c = 9999999999999999;/* 10000000000000000(round of to 15) number */
/* Numeric literals with absolute values equal to 2^53(9007199254740992) or or greater are too large to be represented accurately as integers */

//! bigint
let d = 9999999999999999n;/* 9999999999999999n bigint */

// ! boolean
let e = "true"/* string */
let f = true/* boolean */
let g = false/* boolean */
let h = Boolean(0);/* false boolean */
let i = Boolean(1);/* true boolean*/
let j = Boolean(2);/* true boolean*/

// ! string
// ? three ways to declare a string
// ? DOUBLE quotes
// ? SINGLE quotes
// ? interpolation / template string
let str1 = "JavaScript"/* string */
let str2 = 'JavaScript'/* string */
let str3 = `JavaScript`/* string */

/* let str = "Java
Script"  //ERROR!!!
console.log(str1); */

let str6 = "Java \n Script"
/* Java
    Script */
let str4 = 'Java \n Script'
/* Java
    Script */
let str5 = `Java
 Script`
/* Java
    Script */

let value1 = ("the value of a is: "+a); /* the value of a is: 10 */
let value2 = ("the value of a&b is: "+a+b); /* the value of a&b is: 104.5 */
let value3 = ("the value of a+b is: "+(a+b)); /* the value of a+b is: 14.5 */

// * interpolatio / template string
// ? the value of the variable can be fetched along with the string.
let value4 = (`the value of a+b is ${a+b}`)/* the value of a+b is 14.5 */

// ! symbol
let k = Symbol('hello')/* Symbol(hello) */
let l = Symbol('hello')/* Symbol(hello) */
let m = k===l/* false */

// ! null
// ! undefined
// * not-defined

let n = null;/* null (null is considered to be BUG/ERROR) type-object*/

let p = undefined/* undefined type-undefined */

var q;/* undefined */

// ~ NOTE: the typeof not-defined is undefined
let s = typeof r /* undefined */

// ! implicit convertion
/* 
console.log(10+"50"); // 1050
console.log(10+z); // ^ ERROR!!! : not defined
console.log(10+"a"); // 10a
console.log(50-"10"); // 40
console.log(10*"10"); // 100
console.log("10"/2); // 5
console.log("10"%2); // 0
console.log(true+0); // 1
console.log(false+0); // 0
console.log(10+true); // 11
console.log(10+false); // 10
console.log(true+true); // 2
console.log(true-true); // 0
console.log(false+false); //0
console.log(true+"10"); // true10
console.log(true-"10"); // -9
console.log(true-false); // 1
console.log(false-true); // -1
console.log("10"-"5"); // 5
console.log("a"+"a"); //aa
console.log("a"-"a");// NaN 
*/

/* 
let a=prompt("Enter number")
let b=prompt("Enter number")
console.log(a+b); // 1020(string) 
*/

// ! explicit conversion
let a1="100"
let b1="WEB10"
let c1="10WEB"
let d1="Web"

/* 
console.log(Number(a1)); // 100
console.log(typeof a1); // string
console.log(typeof Number(a1)); // number

console.log(Number(b1)); // NaN(Not A Number)
console.log(typeof Number(a1)); // number

console.log(Number(c1)); // NaN(Not A Number)
console.log(typeof Number(c1)); // number

console.log(Number(d1)); // NaN(Not A Number)
console.log(typeof Number(d1)); // number

console.log(parseInt(a1)); // 100
console.log(parseInt(b1)); // NaN
console.log(parseInt(c1)); // 10
console.log(parseInt(d1)); // NaN

console.log(parseFloat(a1)); // 100
console.log(parseFloat(b1)); // NaN
console.log(parseFloat(c1)); // 10
console.log(parseFloat(d1)); // NaN

console.log(parseInt(123.456)); // 123
console.log(parseFloat(123.456)); // 123.456

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(parseInt(true)); // NaN
console.log(parseFloat(true)); // NaN 
*/
/* 
let a=Number(prompt("Enter Number"))
console.log(typeof a); //number 

let a=prompt("Enter Number")
console.log(typeof a); //string 
*/

let floor = Math.floor(7/3)//2
let random = Math.random();/* toggles between 1 & 0 and can have decimal number (0.22033234442153105)*/
let round1 = Math.round(5.7)//6
let round2 = Math.round(5.5)//6
let round3 = Math.round(5.4)//5

let max = Math.max(5,23,0,14,85,88)//88
let min = Math.min(5,23,1,14,85,88)//1

let absolute = Math.abs(-50)//50
let cubeRoot = Math.cbrt(64)//4
let squareRoot = Math.sqrt(64)//8