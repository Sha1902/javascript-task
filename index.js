// Execution context

//var name = "Sharan";

//function greet() {
//  var message = "Hello " + name;
//  console.log(message);
//}

//greet();


// call Stack

// function first() {
//   console.log("First function started");
//   second();
//   console.log("First function ended");
// }

// function second() {
//   console.log("Second function started");
//   third();
//   console.log("Second function ended");
// }

// function third() {
//   console.log("Third function running");
// }

// first();



// How does Function work in JavaScript and variable environment?

// var globalVar = "I am Global";

// function outer(a) {
//   var outerVar = "I am Outer";

//   function inner() {
//     var innerVar = "I am Inner";
//     console.log(globalVar); 
//     console.log(outerVar);  
//     console.log(innerVar);  
//     console.log(a);         
//   }

//   inner();
// }

// outer(100);



// Scope chain and lexical environment

// var globalVar = "I am Global";

// function outer() {
//   var outerVar = "I am Outer";

//   function inner() {
//     var innerVar = "I am Inner";

//     console.log(globalVar); 
//     console.log(outerVar);  
//     console.log(innerVar);   
//   }

//   inner();
// }

// outer();



