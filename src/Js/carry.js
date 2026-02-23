// Currying is a useful technique used in JavaScript applications.

// Please implement a curry() function, which accepts a function and return a curried one.

// Here is an example

function curry(fn) {
  // your code here
  return function carried(...args) {
    if (fn.length <= args.length) {
      return fn(...args);
    }

    return function (...nextargs) {
      return carried(...args, ...nextargs);
    };
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
curriedJoin(1)(2, 3); // '1_2_3'
curriedJoin(1, 2)(3); // '1_2_3'

// This curry function converts a normal function into a curried version by 
// collecting arguments over multiple calls using closures. 
// It returns a wrapper function that captures the arguments passed so far. 
// On each invocation, it checks whether the number of collected arguments is
//  greater than or equal to the original function’s arity,
//  which is determined using fn.length. If enough arguments are available, 
// it immediately executes the original function with all collected arguments.
//  Otherwise, it returns another function that accepts more arguments and 
// recursively combines them with the previously stored ones. This approach allows
//  flexible invocation patterns like single, partial, or chained calls while
//  preserving execution correctness.
