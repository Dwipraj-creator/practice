function outerFunction(){
    let message = "Hello, World!";

   return   function innterFunction(){
       console.log(message); 
    }
}

const closureFunction = outerFunction();
closureFunction(); // Output: Hello, World!

// Explanation:
// In this code, we have an outer function called `outerFunction` that defines a variable `message` and returns an inner function called `innterFunction`. The inner function has access to the `message` variable even after the outer function has finished executing, which is a key feature of closures in JavaScript. When we call `closureFunction()`, it logs the value of `message`, demonstrating that the inner function retains access to the variables of its outer function.