function createSpy() {
    return "Hello, ";
 }
 function receivesAFunction(spyMan, callback) {
   console.log(spyMan() + callback);
 }
 
 receivesAFunction(createSpy, "JavaScript!");



 function returnsANamedFunction() {
    return function kingOfFunctions() {
        console.log('function')
    }
 }

 function returnsAnAnonymousFunction() {
    return function() {
        console.log('function winner')
    }
 }