# Javascript Interview Questions

1.  What is javascript

    JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language.

2.  Enumerate the differences between Java and JavaScript?

    Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for different intent. Java is an object-oriented programming (OOPS) or structured programming languages like C++ or C, whereas JavaScript is a client-side scripting language.

3.  What are JavaScript Data Types?

    Following are the JavaScript Data types:

    - Number
    - String
    - Boolean
    - Object
    - Undefined

4.  What is the use of isNaN function?

    `isNan` function returns true if the argument is not a number; otherwise, it is false.

5.  What is the difference between == and === operators?

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

6.  In JavaScript, it is possible for the programmers to convert the string to an integer?

    Yes, this can be done easily in JavaScript. For this, the function parseInt() is used. It generally takes the string into the first parameter and then to the next parameter which is considered as the base of given string.

7.  Name the two basic groups of data types in JavaScript?

    - Reference types
      - Objects
      - Arrays
      - Functions
    - Primitive
      - Numbers
      - Boolean
      - Null
      - Undefined

8.  In a program, how can you delete the variables? Is there any limit on deletion?

    This task can be done simply with the help of an operator and i.e. Delete. Although it deletes all the variables, as well as the objects in a program it’s is not possible for this operator to delete those objects and variables that are declared already with the VAR keyword. For deleting these variables, another command is to be followed. Any number of other variables can be deleted with this operator. It is also possible to erase a specific portion of coding simply and without accessing any other command for this.

9.  What is a prototype chain

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

36. What is a callback function?

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

37. Why do we need callbacks?

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

38. What is a callback hell?

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

39. What are server-sent events?

    Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc.

40. What is a strict mode in javascript?

    Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression `"use strict"`; instructs the browser to use the javascript code in the Strict mode.

41. Why do you need strict mode?

    Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.

42. How do you declare strict mode?

    The strict mode is declared by adding "use strict"; to the beginning of a script or a function. If declared at the beginning of a script, it has global scope.

    ```javascript
    'use strict';
    x = 3.14; // This will cause an error because x is not declared
    ```

    and if you declare inside a function, it has local scope

    ```javascript
    x = 3.14; // This will not cause an error.
    myFunction();

    function myFunction() {
      'use strict';
      y = 3.14; // This will cause an error
    }
    ```

43. What is the purpose of double exclamation?

    The double exclamation or negation(!!) ensures the resulting type is a boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, true. For example, you can test IE version using this expression as below,

    ```javascript
    let isIE8 = false;
    isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
    console.log(isIE8); // returns true or false
    ```

    If you don't use this expression then it returns the original value.

    ```javascript
    console.log(navigator.userAgent.match(/MSIE 8.0/)); // returns either an Array or null
    ```

    **Note:** The expression !! is not an operator, but it is just twice of ! operator.

44. What is the purpose of the delete operator?

    The delete keyword is used to delete the property as well as its value.

    ```javascript
    var user = { name: 'John', age: 20 };
    delete user.age;

    console.log(user); // {name: "John"}
    ```

45. What is the typeof operator?

    You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.

    ```javascript
    typeof 'John Abraham'; // Returns "string"
    typeof (1 + 2); // Returns "number"
    ```

46. What is undefined property?

    The undefined property indicates that a variable has not been assigned a value, or not declared at all. The type of undefined value is undefined too.

    ```javascript
    var user; // Value is undefined, type is undefined
    console.log(typeof user); //undefined
    ```

    Any variable can be emptied by setting the value to undefined.

    ```javascript
    user = undefined;
    ```

47. What is null value?

    The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object. You can empty the variable by setting the value to null.

    ```javascript
    var user = null;
    console.log(typeof user); //object
    ```

48. What is the difference between null and undefined?

    Below are the main differences between null and undefined,

    | Null                                                                                            | Undefined                                                                                               |
    | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
    | It is an assignment value which indicates that variable points to no object.                    | It is not an assignment value where a variable has been declared but has not yet been assigned a value. |
    | Type of null is object                                                                          | Type of undefined is undefined                                                                          |
    | The null value is a primitive value that represents the null, empty, or non-existent reference. | The undefined value is a primitive value used when a variable has not been assigned a value.            |
    | Indicates the absence of a value for a variable                                                 | Indicates absence of variable itself                                                                    |
    | Converted to zero (0) while performing primitive operations                                     | Converted to NaN while performing primitive operations                                                  |

49. What is eval?

    The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.

    ```javascript
    console.log(eval('1 + 2')); //  3
    ```

50. What is isNaN?

    The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.

    ```javascript
    isNaN('Hello'); //true
    isNaN('100'); //false
    ```

51. What is NaN property?

    The NaN property is a global property that represents "Not-a-Number" value. i.e, It indicates that a value is not a legal number. It is very rare to use NaN in a program but it can be used as return value for few cases

    ```javascript
    Math.sqrt(-1);
    parseInt('Hello');
    ```

52. What is the purpose of isFinite function?
    The isFinite() function is used to determine whether a number is a finite, legal number. It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), otherwise it returns true.

    ```javascript
    isFinite(Infinity); // false
    isFinite(NaN); // false
    isFinite(-Infinity); // false

    isFinite(100); // true
    ```

53. What are the tools or techniques used for debugging JavaScript code?

    You can use below tools or techniques for debugging javascript

    1. Chrome Devtools
    2. debugger statement
    3. Good old console.log statement

54. What is the difference between an attribute and a property?

    ```javascript
    <input type="text" value="Name:">
    ```

    You can retrieve the attribute value as below,

    ```javascript
    const input = document.querySelector('input');
    console.log(input.getAttribute('value')); // Good morning
    console.log(input.value); // Good morning
    ```

    And after you change the value of the text field to "Good evening", it becomes like

    ```javascript
    console.log(input.getAttribute('value')); // Good morning
    console.log(input.value); // Good evening
    ```

55. What is same-origin policy?

    The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

56. What is the use of preventDefault method?

    The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.

    ```javascript
    document.getElementById('link').addEventListener('click', function (event) {
      event.preventDefault();
    });
    ```

    **Note:** Remember that not all events are cancelable.

57. Why is JavaScript treated as Single threaded?

    JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes. Whereas languages like java, go, C++ can make multi-threaded and multi-process programs.

58. What is ECMAScript?

    ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The first edition of ECMAScript was released in 1997.

59. What is JSON?

    JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.
