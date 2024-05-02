//& anonymous function: function without name and cannot be executed alone
const anonymous = function(){
    return 'Anonymous'
}
anonymous()
//OR
const iife = (function(){
    return 'Anonymous'
})()
/* Here to execute anonymous fonction we are using function with expression or IIFE... */

//& name/regular function: 
function regular(){
    return 'regular'
}
regular()

//& function with expression:
const expression = function(){
    return 'Expression'
}
expression()

//& first class/first citizen function: whenever a function is initialized to a variable, only the function is called first class/first citizen function
const firstClass = function(){
    return 'firstClass'
}
firstClass()
/* here anonymous function is first class/first citizen function */

//& Arrow function:
const arrow = ()=>{
    return 'Arrow function'
}
arrow()
//OR
const multiplication = (a,b)=>{return a*b}
//OR
const sum = (a,b)=>a+b
/* Here if we are using return statement or having nore than one line we need to enclose in braces. we can directly return single return without using return keyword(implicit return) */

//& Higher Order Function and Callback Function: The function which accepts another function as an argument and returns a function is called HOF and the function which is passed as an argument is called callback function here it becomed asynchronous
function higherOrderFunction(acceptsCallback,a,b){
    return acceptsCallback(a,b)
}
function sumAsCallback(a,b){
    return a+b
}
const result = higherOrderFunction(sumAsCallback,5,6)

//& Nested function: function inside another function, here outer function variables can be accessed inside nested function but vise-versa cannot happen
function calculator(num1,num2){
    function addition(a,b){
        return a+b
    }
    function multiplication(a,b){
        return a*b
    }
    let add = addition(num1, num2)
    let mul = multiplication(num1, num2)
    return {add, mul}
}

/* 
CLOSURE:
1.Closure holds the data of the parent function which is required for the child function even when the parent function is out of callstack
2.It holds only the data required for the child function

LEXICAL SCOPE:
1.Ability of the JS engine to search for the variable in the global scope or outer scope whenever it is not in the local scope
2.It is unidirectional which means parents data can be fetched by child data but vice-versa not possible
 */

//& Immidiate Invoke Function Expression: It is one time execution, it was introduces to execute those function which was needed for shorter duration and to avoid littering global name space
const iifexpression = (function(){
    return 'Anonymous'
})()

//& Recursion function: calling itself again and again
let num = 0
function recursion(n){
    if(n>0){
        num += n
        recursion(--n)
    }
    return num
}

//& generator function:
function* generator(n){
    for(let i=n;i>0;i--)
        yield i
}
/* let value = generator(9)
for(let i of value)
    console.log(i) */

/* 
Difference between regular(RF) and arrow function(AF):
1.Binding of 'this':
RF has there own 'this' context & AF doesn't have their own 'this' and inherit from surrounding lexical scope 

2.Hoisting:
RF are hoisted i.e they are available for use before they are declared and AF are not hoisted i.e they are not available for use before they are declared

3.Arguments Object:
RF have their own 'argument' object which contains all the arguments passed to the function and AF doesn't have their own 'argument' object

4.Implicit return:
RF requires an 'explicit' return to return value and AF allows for implicit return if body consist of single expression

5.Object method:
RF are suitable for defining methods on object as 'this' allows to access on object properties and AF are not suitable as they don't have 'this' context

6.Constructor:
RF can be used as constructor function and objects can be created using new key word and AF cannot be used as constructor function

7.Function.prototype.bind():
RF can be used with bind() to explicitly bind 'this' context and AF do not have there own 'this' context so they cannot be used with bind() 
*/