# Callback

1. What is a callback function?

   A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.
   Let's take a simple example of how to use callback function

   ```javascript
   function callbackFunction(name) {
     console.log('Hello ' + name);
   }

   function outerFunction(callback) {
     let name = prompt('Please enter your name.');
     callback(name);
   }

   outerFunction(callbackFunction);
   ```

2. Why do we need callbacks?

   The callbacks are needed because javascript is a event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.
   Let's take an example with first function invoking an API call(simulated by setTimeout) and next function which logs the message.

   ```javascript
   function firstFunction() {
     // Simulate a code delay
     setTimeout(function () {
       console.log('First function called');
     }, 1000);
   }
   function secondFunction() {
     console.log('Second function called');
   }
   firstFunction();
   secondFunction();

   Output;
   // Second function called
   // First function called
   ```

   As observed from the output, javascript didn't wait for the response of first function and remaining code block get executed. So callbacks used in a way to make sure that certain code doesn’t execute until other code finished execution.

3. What is a callback hell?

   Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

   ```javascript
   async1(function(){
       async2(function(){
           async3(function(){
               async4(function(){
                   ....
               });
           });
       });
   });
   ```
