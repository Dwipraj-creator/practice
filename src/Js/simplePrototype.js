// There are various ways of setting an object's prototype in JavaScript, and here we'll describe two: Object.create() and constructors.
// Object.create 

const personPrototype= {
    great(){
        console.log("Hello")
    }
}

const carl = Object.create(personPrototype)
carl.great() // hello 
//Here we create an object personPrototype, which has a greet() method. We then use Object.create() to create a new object with personPrototype as its prototype. Now we can call greet() on the new object, and the prototype provides its implementation.


// using a constructor
//In JavaScript, all functions have a property named prototype. When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named __proto__).
// So if we set the prototype of a constructor, we can ensure that all objects created with that constructor are given that prototype:

const personPrototype2 = {
    great(){
        console.log(`hello , my name is ${this.name}`)
    }
}

function Person(name){
    this.name = name
}

Person.prototype.great = personPrototype2.great

const reuben = new Person("Dwipraj")
reuben.great()