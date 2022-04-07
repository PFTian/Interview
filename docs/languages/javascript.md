# Javascript Interview Questions

1. What is javascript

   JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language.

2. Enumerate the differences between Java and JavaScript?

   Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for different intent. Java is an object-oriented programming (OOPS) or structured programming languages like C++ or C, whereas JavaScript is a client-side scripting language.

3. What are JavaScript Data Types?

   Following are the JavaScript Data types:

   - Number
   - String
   - Boolean
   - Object
   - Undefined

4. What is the use of isNaN function?

   `isNan` function returns true if the argument is not a number; otherwise, it is false.

5. What is the difference between == and === operators?

   JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators takes type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,

   1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.

   2. Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value. There are two special cases in this,
      1. NaN is not equal to anything, including NaN.
      2. Positive and negative zeros are equal to one another.
   3. Two Boolean operands are strictly equal if both are true or both are false.
   4. Two objects are strictly equal if they refer to the same Object.
   5. Null and Undefined types are not equal with ===, but equal with ==. i.e, null===undefined --> false but null==undefined --> true

   Some of the example which covers the above cases

   ```javascript
   0 == false   // true
   0 === false  // false
   1 == "1"     // true
   1 === "1"    // false
   null == undefined // true
   null === undefined // false
   '0' == false // true
   '0' === false // false
   []==[] or []===[] //false, refer different objects in memory
   {}=={} or {}==={} //false, refer different objects in memory
   ```

6. In JavaScript, it is possible for the programmers to convert the string to an integer?

   Yes, this can be done easily in JavaScript. For this, the function parseInt() is used. It generally takes the string into the first parameter and then to the next parameter which is considered as the base of given string.

7. Name the two basic groups of data types in JavaScript?

   - Reference types
     - Objects
     - Arrays
     - Functions
   - Primitive
     - Numbers
     - Boolean
     - Null
     - Undefined

8. In a program, how can you delete the variables? Is there any limit on deletion?

   This task can be done simply with the help of an operator and i.e. Delete. Although it deletes all the variables, as well as the objects in a program it’s is not possible for this operator to delete those objects and variables that are declared already with the VAR keyword. For deleting these variables, another command is to be followed. Any number of other variables can be deleted with this operator. It is also possible to erase a specific portion of coding simply and without accessing any other command for this.

9. What is a prototype chain

   Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

   The prototype on object instance is available through Object.getPrototypeOf(object) or proto property whereas prototype on constructors function is available through Object.prototype.

10. What is JSON and its common operations

    JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json

    Parsing: Converting a string to a native object

    ```javascript
    JSON.parse(text);
    ```

    Stringification: converting a native object to a string so it can be transmitted across the network

    ```javascript
    JSON.stringify(object);
    ```

11. What is the purpose of the array slice method

    The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

    ```javascript
    let arrayIntegers = [1, 2, 3, 4, 5];
    let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
    let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
    let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
    ```

    Note: Slice method won't mutate the original array but it returns the subset as a new array.

12. What is the purpose of the array splice method.

    The splice() method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

    Some of the examples of this method are,

    ```javascript
    let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

    let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
    let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
    let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, 'a', 'b', 'c'); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
    ```

    Note: Splice method modifies the original array and returns the deleted array.

13. What is the difference between slice and splice

    | slice                                        | splice                                          |
    | -------------------------------------------- | ----------------------------------------------- |
    | Doesn't modify the original array(immutable) | Modifies the original array(mutable)            |
    | Returns the subset of original array         | Returns the deleted elements as array           |
    | Used to pick the elements from array         | Used to insert or delete elements to/from array |

14. How do you compare Object and Map

    Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

    1. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
    2. The keys in Map are ordered while keys added to object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
    3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
    4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
    5. An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
    6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.

15. What are lambda or arrow functions?

    An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

    There are differences between arrow functions and traditional functions, as well as some limitations:

    - Arrow functions don't have their own bindings to this or super, and should not be used as methods.
    - Arrow functions don't have access to the new.target keyword.
    - Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
    - Arrow functions cannot be used as constructors.
    - Arrow functions cannot use yield, within its body.

16. What is a first class function?

    A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

17. What is a first order function?

    First-order function is a function that doesn’t accept other function as an argument and doesn’t return a function as its return value.

18. What is a higher order function?

    Higher-order function is a function that accepts ot her function as an argument or returns a function as a return value.

19. What is a unary function?

    Unary function (i.e. monadic) is a function that accepts exactly one argument.

20. What is currying function?

    Currying is the transformation of a function with multiple arguments into a sequence of single-argument functions. That means converting a function like this `f(a, b, c, ...)` into a function like this `f(a)(b)(c)`

21. What is the purpose of `let` keyword?

    The `let` statement declares a block scope local variable. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the var keyword used to define a variable globally, or locally to an entire function regardless of block scope.

22. What is the difference between `let` and `var`

    | let                                                                    | var                                           |
    | ---------------------------------------------------------------------- | --------------------------------------------- |
    | It has been available from the beginning of JavaScript                 | Introduced as part of ES6                     |
    | It has function scope                                                  | It has block scope                            |
    | Variables will be hoisted (initialized with undefined before code run) | Hoisted but not initialized (ReferenceError)) |

    PS: `Hoisting` is the process of setting up of memory space for our variables and functions. Before the code starts to execute, the JS engine goes thru the code and sets up blocks of memory for functions and variables. The values of variables are not stored but functions are stored entirely along with their definitions.

23. How do you redeclare variables in switch block without an error?

    ```javascript
    let counter = 1;
    switch (x) {
      case 0:
        let name;
        break;

      case 1:
        let name; // SyntaxError for redeclaration.
        break;
    }
    ```

    To avoid this error, you can create a nested block inside a case clause will create a new block scoped lexical environment.

    ```javascript
    let counter = 1;
    switch (x) {
      case 0: {
        let name;
        break;
      }
      case 1: {
        let name; // No SyntaxError for redeclaration.
        break;
      }
    }
    ```

24. What is the Temporal Dead Zone?

    The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

25. What is IIFE(Immediately Invoked Function Expression)?

    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

    ```javascript
    (function () {
      // logic here
    })();
    ```

    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

    ```javascript
    (function () {
      var message = 'IIFE';
      console.log(message);
    })();
    console.log(message); //Error: message is not defined
    ```

26. How do you decode or encode a URL in JavaScript?

    encodeURI() function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string. decodeURI() function is used to deocde an URL. This function requires an encoded URL string as parameter and return that decoded string.

    **Note:** If you want to encode characters such as / ? : @ & = + $ # then you need to use encodeURIComponent().

27. What is memoization?

    Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization,

    ```javascript
    const memoizAddition = () => {
      let cache = {};
      return (value) => {
        if (value in cache) {
          console.log('Fetching from cache');
          return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
        } else {
          console.log('Calculating result');
          let result = value + 20;
          cache[value] = result;
          return result;
        }
      };
    };
    // returned function from memoizAddition
    const addition = memoizAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 cached
    ```

28. What is Hoisting?

    JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

    Hoisting allows functions to be safely used in code before they are declared.

29. What are classes in ES6?

    Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

30. What is hoisting difference between function declarations and class ddeclarations?

    An important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed. Code like the following will throw a ReferenceError.

    ```javascript
    const p = new Rectangle(); // ReferenceError
    class Rectangle {}
    ```

    This occurs because while the class is hoisted its values are not initialized.

31. What are closures?

    A closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope

    More [detailed explanation](https://www.javascripttutorial.net/javascript-closure/#:~:text=In%20JavaScript%2C%20a%20closure%20is,the%20lexical%20scoping%20works%20first.) for closures.

    A closure is a combination of a function and its ability to remember variables in the outer scope.

32. What is scope in javascript?

    Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

33. What is scope in javascript?

    A Service worker is basically a script (JavaScript file) that runs in background, separate from a web page and provide features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

34. How do you manipulate DOM using service worker?

    Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the postMessage interface, and those pages can manipulate the DOM.

35. What is IndexedDB?

    IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.

36. What is a promise?

    A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

    The syntax of promise would be as below,

    ```javascript
    const promise = new Promise(function (resolve, reject) {
      // promise description
    });
    ```

37. Why do you need a promise?

    Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

38. What are the three states of promise?

    - **Pending:** This is an initial state of the Promise before an operation begins.
    - **Fulfilled:** This state indicates that specified operation was completed.
    - **Rejected:** This state indicates that the operation did not complete. In this case an error value will be thrown.

39. What is a callback function?

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

40. What are the main rules of promise?

    A promise must follow a specific set of rules,

    1. A promise is an object that supplies a standard-compliant `.then()` method
    2. A pending promise may transition into either fulfilled or rejected state
    3. A fulfilled or rejected promise is settled and it must not transition into any other state.
    4. Once a promise is settled, the value must not change.

41. Why do we need callbacks?

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

42. What is a callback hell?

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

43. What are server-sent events?

    Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc.

44.
