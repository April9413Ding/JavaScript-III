/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. points to everything(window) in default
* 2. function inside an object points to the object on the left side of "."
* 3. .call points to the argument inside "()" and invoke immediately
* 4. .bind create a new function points to the argument inside "()" and can be invoke later
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this

// Principle 2

// code example for Implicit Binding
const myCat = {
    animal: "cat",
    lang: "English",
    speak: function(){
    console.log(`I am a ${this.animal} and I speak ${this.lang}!`)
    }
}
myCat.speak();

// Principle 3

// code example for New Binding
function speak(){
    console.log(`I am a ${this.animal} and I speak ${this.lang}!`)
}
const myHamster = {
    animal:"hamster",
    lang:"Italian",
}

const newSpeak = speak.bind(myHamster);
newSpeak();

// Principle 4

// code example for Explicit Binding
const myDog = {
    animal: "dog",
    lang: "French",
}

speak.call(myDog);