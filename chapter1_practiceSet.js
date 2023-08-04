// Chapter 1 - Q1 -create a variable of type string and try to add a number to it
let a = "Subimal"
let b = 6
console.log(a + b)

// Chapter 1 - Q2 -use type operator to find the datatype of the string in last question
console.log(typeof (a+b))

// Chapter 1 - Q3 -create a constant ibject in javascript.can u change it to hold a number later.
const a1 = {
  name: "sagar",
  section: 1,
  isPrincipal: false
}
//a1 pointing an object that is reserved in memory ,a1 is a ref for this # we can be change the value shown in question no 4

// a1 = 45
// a1 = {}

// Chapter 1 - Q4  -Try to add a number key to the constant object in problem 3.Are u able to do it?
a1['friend'] = "Shubham"  
a1['name'] = "Lovish"  
console.log(a1)

// Chapter 1 - Q5  - js program to write wordmeaning dictionary for 5 words
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict['yakka']) 
console.log(dict.ataraxia)
