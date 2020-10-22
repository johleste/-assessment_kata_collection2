let sum = 0
let count = 0   //multiply counter
let count2 = 0  //exponent counter
let count3 = 0  //factorial counter
let multiple = 0
let multiple1 = 0
let multiple2 = 0
let product = 0 
let product2 = 0
let factor1 = 0
let factor2 = 0
let exponent = 0
let factorial = 0
let expoArray = [] //exponent tracking array
let factoArray = [] //factorial value array
let factoTrackArray= [] //factorial value tracking array
let a = 0 //first value for functions
let b = 0 // second value for functions
let c = 0 // exponent
let d = 0 // factorial value multiply
let e = 0 // factorial value multiply -1
let f = 0 // factorial value tracking
function Add (a, b) {
let sum = a+b
//console.log("sum of",a, "+", b, "=", sum, "!!") //displays the function being called
return sum
}
console.log(Add(3, 6))
function Multiply (a, b){
    count = 0
    multiple = 0
    console.log(a, "x", b)
    multiple1 = a
    multiple2 = b
    while (count < b) {
    count = Add(count, 1)
    multiple = Add(multiple, a)
    product = multiple
}
return product
}
 console.log(Multiply(9, 9))
 console.log("Product of", multiple1, "x",multiple2,"=", multiple, "!!!!!!!!") //Exclamation points are basically tabs to make the finished prodcut of fuctions more visible and easier
 a = 0 // to find
 b = 0
 count = 0
 multiple = 0
 multiple1 = 0
 multiple2 = 0
function Power (a, b){
    count = 0
    count2 = 1
    factor1 = a
    factor2 = b
    expoArray = []
    c = factor1
    while (count2 < factor2){  
    c = Multiply(c, factor1)
    expoArray.push(c)
    count2 = Add(count2, 1)
    }
 return exponent
}
console.log(Power (3, 6))
console.log(factor1,"^",factor2,"=", c, "!!!!!!!!!!!!!!!!")
console.log("should be 729")
function Factorial (a){
count3 = a
d = a
factorial = d
while (count3 > 0){
e = Add(d, -1)
factorial = Multiply (factorial, e)
console.log(factorial)
d = Add (d, -1)
count3 = Add(count3, -1)
}
return factorial
}
console.log(Factorial (7))
console.log ("should be 5040")
function Fibonacci (){

}