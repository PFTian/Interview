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
      - String
      - Number
      - Boolean
      - Null
      - Undefined
      - Bigint
      - Symbol

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

36. What are server-sent events?

    Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc.

37. What is a strict mode in javascript?

    Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression `"use strict"`; instructs the browser to use the javascript code in the Strict mode.

38. Why do you need strict mode?

    Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.

39. How do you declare strict mode?

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

40. What is the purpose of double exclamation?

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

41. What is the purpose of the delete operator?

    The delete keyword is used to delete the property as well as its value.

    ```javascript
    var user = { name: 'John', age: 20 };
    delete user.age;

    console.log(user); // {name: "John"}
    ```

42. What is the typeof operator?

    You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.

    ```javascript
    typeof 'John Abraham'; // Returns "string"
    typeof (1 + 2); // Returns "number"
    ```

43. What is undefined property?

    The undefined property indicates that a variable has not been assigned a value, or not declared at all. The type of undefined value is undefined too.

    ```javascript
    var user; // Value is undefined, type is undefined
    console.log(typeof user); //undefined
    ```

    Any variable can be emptied by setting the value to undefined.

    ```javascript
    user = undefined;
    ```

44. What is null value?

    The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object. You can empty the variable by setting the value to null.

    ```javascript
    var user = null;
    console.log(typeof user); //object
    ```

45. What is the difference between null and undefined?

    Below are the main differences between null and undefined,

    | Null                                                                                            | Undefined                                                                                               |
    | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
    | It is an assignment value which indicates that variable points to no object.                    | It is not an assignment value where a variable has been declared but has not yet been assigned a value. |
    | Type of null is object                                                                          | Type of undefined is undefined                                                                          |
    | The null value is a primitive value that represents the null, empty, or non-existent reference. | The undefined value is a primitive value used when a variable has not been assigned a value.            |
    | Indicates the absence of a value for a variable                                                 | Indicates absence of variable itself                                                                    |
    | Converted to zero (0) while performing primitive operations                                     | Converted to NaN while performing primitive operations                                                  |

46. What is eval?

    The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.

    ```javascript
    console.log(eval('1 + 2')); //  3
    ```

47. What is isNaN?

    The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.

    ```javascript
    isNaN('Hello'); //true
    isNaN('100'); //false
    ```

48. What is NaN property?

    The NaN property is a global property that represents "Not-a-Number" value. i.e, It indicates that a value is not a legal number. It is very rare to use NaN in a program but it can be used as return value for few cases

    ```javascript
    Math.sqrt(-1);
    parseInt('Hello');
    ```

49. What is the purpose of isFinite function?
    The isFinite() function is used to determine whether a number is a finite, legal number. It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), otherwise it returns true.

    ```javascript
    isFinite(Infinity); // false
    isFinite(NaN); // false
    isFinite(-Infinity); // false

    isFinite(100); // true
    ```

50. What are the tools or techniques used for debugging JavaScript code?

    You can use below tools or techniques for debugging javascript

    1. Chrome Devtools
    2. debugger statement
    3. Good old console.log statement

51. What is the difference between an attribute and a property?

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

52. What is same-origin policy?

    The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

53. What is the use of preventDefault method?

    The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.

    ```javascript
    document.getElementById('link').addEventListener('click', function (event) {
      event.preventDefault();
    });
    ```

    **Note:** Remember that not all events are cancelable.

54. Why is JavaScript treated as Single threaded?

    JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes. Whereas languages like java, go, C++ can make multi-threaded and multi-process programs.

55. What is ECMAScript?

    ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The first edition of ECMAScript was released in 1997.

56. How do you validate an email in javascript?

    You can validate an email in javascript using regular expressions. It is recommended to do validations on the server side instead of the client side. Because the javascript can be disabled on the client side.

    ```javascript
    function validateEmail(email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    ```

57. What are the various url properties of location object?

    The below Location object properties can be used to access URL components of the page,

    1.  href - The entire URL
    2.  protocol - The protocol of the URL
    3.  host - The hostname and port of the URL
    4.  hostname - The hostname of the URL
    5.  port - The port number in the URL
    6.  pathname - The path name of the URL
    7.  search - The query portion of the URL
    8.  hash - The anchor portion of the URL

58. What is the `arguments` object?

    The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function,

    ```javascript
    function sum() {
      var total = 0;
      for (var i = 0, len = arguments.length; i < len; ++i) {
        total += arguments[i];
      }
      return total;
    }

    sum(1, 2, 3); // returns 6
    ```

59. Is the !-- notation represents a special operator?

    No,that's not a special operator. But it is a combination of 2 standard operators one after the other,

    1.  A logical not (!)
    2.  A prefix decrement (--)

    At first, the value decremented by one and then tested to see if it is equal to zero or not for determining the truthy/falsy value.

60. What is an app shell model?

    An application shell (or app shell) architecture is one way to build a Progressive Web App that reliably and instantly loads on your users' screens, similar to what you see in native applications. It is useful for getting some initial HTML to the screen fast without a network.

61. What is a polyfill?

    A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it. For example, Silverlight plugin polyfill can be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7.

62. What are js labels?

    The label statement allows us to name loops and blocks in JavaScript. We can then use these labels to refer back to the code later. For example, the below code with labels avoids printing the numbers when they are same,

    The label statement allows us to name loops and blocks in JavaScript. We can then use these labels to refer back to the code later. For example, the below code with labels avoids printing the numbers when they are same,

    ```javascript
    var i, j;

    loop1: for (i = 0; i < 3; i++) {
      loop2: for (j = 0; j < 3; j++) {
        if (i === j) {
          continue loop1;
        }
        console.log('i = ' + i + ', j = ' + j);
      }
    }

    // Output is:
    //   "i = 1, j = 0"
    //   "i = 2, j = 0"
    //   "i = 2, j = 1"
    ```

63. What are the benefits of keeping declarations at the top?

    It is recommended to keep all declarations at the top of each script or function. The benefits of doing this are,

    1.  Gives cleaner code
    2.  It provides a single place to look for local variables
    3.  Easy to avoid unwanted global variables
    4.  It reduces the possibility of unwanted re-declarations

64. What are the benefits of initializing variables?

    It is recommended to initialize variables because of the below benefits,

    1.  It gives cleaner code
    2.  It provides a single place to initialize variables
    3.  Avoid undefined values in the code

65. What are the recommendations to create new object?

    It is recommended to avoid creating new objects using `new Object()`. Instead you can initialize values based on it's type to create the objects.

    1.  Assign {} instead of new Object()
    2.  Assign "" instead of new String()
    3.  Assign 0 instead of new Number()
    4.  Assign false instead of new Boolean()
    5.  Assign [] instead of new Array()
    6.  Assign /()/ instead of new RegExp()
    7.  Assign function (){} instead of new Function()

    You can define them as an example,

    ```javascript
    var v1 = {};
    var v2 = '';
    var v3 = 0;
    var v4 = false;
    var v5 = [];
    var v6 = /()/;
    var v7 = function () {};
    ```

66. What is tree shaking?

    Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export). Initially this has been popularized by the ES2015 module bundler rollup.

67. What is the need of tree shaking?

    Tree Shaking can significantly reduce the code size in any application. i.e, The less code we send over the wire the more performant the application will be. For example, if we just want to create a “Hello World” Application using SPA frameworks then it will take around a few MBs, but by tree shaking it can bring down the size to just a few hundred KBs. Tree shaking is implemented in Rollup and Webpack bundlers.

68. Is it recommended to use eval?

    No, it allows arbitrary code to be run which causes a security problem. As we know that the eval() function is used to run text as code. In most of the cases, it should not be necessary to use it.

69. What is a debugger statement?

    The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect. For example, in the below function a debugger statement has been inserted. So execution is paused at the debugger statement just like a breakpoint in the script source.

    ```javascript
    function getProfile() {
      // code goes here
      debugger;
      // code goes here
    }
    ```

70. What is the purpose of breakpoints in debugging?

    You can set breakpoints in the javascript code once the debugger statement is executed and the debugger window pops up. At each breakpoint, javascript will stop executing, and let you examine the JavaScript values. After examining values, you can resume the execution of code using the play button.

71. Can I use reserved words as identifiers

    No, you cannot use the reserved words as variables, labels, object or function names.

72. How do you convert date to another timezone in javascript?

    You can use toLocaleString() method to convert date in one timezone to another. For example, let's convert current date to British English timezone as below,

    ```javascript
    console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' })); //29/06/2019, 09:56:00
    ```

73. What is a freeze method?

    The freeze() method is used to freeze an object. Freezing an object does'nt allow adding new properties to an object,prevents from removing and prevents changing the enumerability, configurability, or writability of existing properties. i.e, It returns the passed object and does not create a frozen copy.

    ```javascript
    const obj = {
      prop: 100,
    };

    Object.freeze(obj);
    obj.prop = 200; // Throws an error in strict mode

    console.log(obj.prop); //100
    ```

    **Note:** It causes a TypeError if the argument passed is not an object.

74. What is the purpose of freeze method?

    Below are the main benefits of using freeze method,

    1.  It is used for freezing objects and arrays.
    2.  It is used to make an object immutable.

75. Why do I need to use freeze method?

    In the Object-oriented paradigm, an existing API contains certain elements that are not intended to be extended, modified, or re-used outside of their current context. Hence it works as the final keyword which is used in various languages.

76. What is a rest parameter?

    Rest parameter is an improved way to handle function parameters which allows us to represent an indefinite number of arguments as an array. The syntax would be as below,

    ```javascript
    function f(a, b, ...theArgs) {
      // ...
    }
    ```

    For example, let's take a sum example to calculate on dynamic number of parameters,

    ```javascript
    function total(…args){
    let sum = 0;
    for(let i of args){
        sum+=i;
    }
    return sum;
    }
    console.log(fun(1,2)); //3
    console.log(fun(1,2,3)); //6
    console.log(fun(1,2,3,4)); //13
    console.log(fun(1,2,3,4,5)); //15
    ```

    **Note:** Rest parameter is added in ES2015 or ES6

77. What happens if you do not use rest parameter as a last argument?

    The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array. For example, if you define a function like below it doesn’t make any sense and will throw an error.

    ```javascript
    function someFunc(a,…b,c){
    //You code goes here
    return;
    }
    ```

78. What are the bitwise operators available in javascript?

    Below are the list of bit-wise logical operators used in JavaScript

    1.  Bit-wise AND ( & )
    2.  Bit-Wise OR ( | )
    3.  Bit-Wise XOR ( ^ )
    4.  Bit-Wise NOT ( ~ )
    5.  Left Shift ( << )
    6.  Sign Propagating Right Shift ( >> )
    7.  Zero fill Right Shift ( >>> )

79. What is a spread operator?

    Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let's take an example to see this behavior,

    ```javascript
    function calculateSum(x, y, z) {
      return x + y + z;
    }

    const numbers = [1, 2, 3];

    console.log(calculateSum(...numbers)); // 6
    ```

80. How do you determine whether object is frozen or not?

    Object.isFrozen() method is used to determine if an object is frozen or not.An object is frozen if all of the below conditions hold true,

    1.  If it is not extensible.
    2.  If all of its properties are non-configurable.
    3.  If all its data properties are non-writable.

    The usage is going to be as follows,

    ```javascript
    const object = {
      property: 'Welcome JS world',
    };
    Object.freeze(object);
    console.log(Object.isFrozen(object));
    ```

81. How do you determine two values same or not using object?

    How do you determine two values same or not using object?
    The Object.is() method determines whether two values are the same value. For example, the usage with different types of values would be,

    ```javascript
    Object.is('hello', 'hello'); // true
    Object.is(window, window); // true
    Object.is([], []); // false
    ```

    Two values are the same if one of the following holds:

    1.  both undefined
    2.  both null
    3.  both true or both false
    4.  both strings of the same length with the same characters in the same order
    5.  both the same object (means both object have same reference)
    6.  both numbers and
        both +0
        both -0
        both NaN
        both non-zero and both not NaN and both have the same value.

82. What is the purpose of using object is method?

    Some of the applications of Object's `is` method are follows,

    1.  It is used for comparison of two strings.
    2.  It is used for comparison of two numbers.
    3.  It is used for comparing the polarity of two numbers.
    4.  It is used for comparison of two objects.

83. How do you copy properties from one object to other?

    You can use the Object.assign() method which is used to copy the values and properties from one or more source objects to a target object. It returns the target object which has properties and values copied from the source object. The syntax would be as below,

    ```javascript
    Object.assign(target, ...sources);
    ```

    Let's take exampple with one source and one target object,

    ```javascript
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };

    const returnedTarget = Object.assign(target, source);

    console.log(target); // { a: 1, b: 3, c: 4 }

    console.log(returnedTarget); // { a: 1, b: 3, c: 4 }
    ```

    As observed in the above code, there is a common property(`b`) from source to target so it's value is been overwritten.

84. What are the applications of assign method?

    Below are the some of main applications of Object.assign() method,

    1.  It is used for cloning an object.
    2.  It is used to merge object with same properties.

85. What is a proxy object?

    The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc. The syntax would be as follows,

    ```javascript
    var p = new Proxy(target, handler);
    ```

    Let's take an example of proxy object,

    ```javascript
    var handler = {
      get: function (obj, prop) {
        return prop in obj ? obj[prop] : 100;
      },
    };

    var p = new Proxy({}, handler);
    p.a = 10;
    p.b = null;

    console.log(p.a, p.b); // 1, null
    console.log('c' in p, p.c); // false, 100
    ```

    In the above code, it uses `get` handler which define the behavior of the proxy when an operation is performed on it

86. What is the purpose of seal method?

    The Object.seal() method is used seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But values of present properties can still be changed as long as they are writable. Let's see the below example to understand more about seal() method

    ```javascript
    const object = {
      property: 'Welcome JS world',
    };
    Object.seal(object);
    object.property = 'Welcome to object world';
    console.log(Object.isSealed(object)); // Welcome to object world
    delete object.property; // You cannot delete when sealed
    console.log(object.property); //Welcome to object world
    ```

87. What are the applications of seal method?

    Below are the main applications of Object.seal() method,

    1.  It is used for sealing objects and arrays.
    2.  It is used to make an object immutable.

88. What are the differences between freeze and seal methods?

    If an object is frozen using the Object.freeze() method then its properties become immutable and no changes can be made in them whereas if an object is sealed using the Object.seal() method then the changes can be made in the existing properties of the object.

89. How do you determine if an object is sealed or not?

    The Object.isSealed() method is used to determine if an object is sealed or not. An object is sealed if all of the below conditions hold true

    1.  If it is not extensible.
    2.  If all of its properties are non-configurable.
    3.  If it is not removable (but not necessarily non-writable).
        Let's see it in the action

    ```javascript
    const object = {
      property: 'Hello, Good morning',
    };

    Object.seal(object); // Using seal() method to seal the object

    console.log(Object.isSealed(object)); // checking whether the object is sealed or not
    ```

90. How do you get enumerable key and value pairs?

    The Object.entries() method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. Let's see the functionality of object.entries() method in an example,

    ```javascript
    const object = {
      a: 'Good morning',
      b: 100,
    };

    for (let [key, value] of Object.entries(object)) {
      console.log(`${key}: ${value}`); // a: 'Good morning'
      // b: 100
    }
    ```

    **Note:** The order is not guaranteed as object defined.

91. What is the main difference between Object.values and Object.entries method?

    The Object.values() method's behavior is similar to Object.entries() method but it returns an array of values instead [key,value] pairs.

    ```javascript
    const object = {
      a: 'Good morning',
      b: 100,
    };

    for (let value of Object.values(object)) {
      console.log(`${value}`); // 'Good morning'
      100;
    }
    ```

92. How can you get the list of keys of any object?

    You can use `Object.keys()` method which is used return an array of a given object's own property names, in the same order as we get with a normal loop. For example, you can get the keys of a user object,

    ```javascript
    const user = {
      name: 'John',
      gender: 'male',
      age: 40,
    };

    console.log(Object.keys(user)); //['name', 'gender', 'age']
    ```

93. How do you create an object with prototype?

    The `Object.create()` method is used to create a new object with the specified prototype object and properties. i.e, It uses an existing object as the prototype of the newly created object. It returns a new object with the specified prototype object and properties.

    ```javascript
    const user = {
      name: 'John',
      printInfo: function () {
        console.log(`My name is ${this.name}.`);
      },
    };

    const admin = Object.create(user);

    admin.name = 'Nick'; // Remember that "name" is a property set on "admin" but not on "user" object

    admin.printInfo(); // My name is Nick
    ```

94. What is a WeakSet?

    WeakSet is used to store a collection of weakly(weak references) held objects. The syntax would be as follows,

    ```javascript
    new WeakSet([iterable]);
    ```

    Let's see the below example to explain it's behavior,

    ```javascript
    var ws = new WeakSet();
    var user = {};
    ws.add(user);
    ws.has(user); // true
    ws.delete(user); // removes user from the set
    ws.has(user); // false, user has been removed
    ```

95. What are the differences between WeakSet and Set?

    The main difference is that references to objects in Set are strong while references to objects in WeakSet are weak. i.e, An object in WeakSet can be garbage collected if there is no other reference to it.
    Other differences are,

    1.  Sets can store any value Whereas WeakSets can store only collections of objects
    2.  WeakSet does not have size property unlike Set
    3.  WeakSet does not have methods such as clear, keys, values, entries, forEach.
    4.  WeakSet is not iterable.

96. Below are the list of methods available on WeakSet,

    1.  add(value): A new object is appended with the given value to the weakset
    2.  delete(value): Deletes the value from the WeakSet collection.
    3.  has(value): It returns true if the value is present in the WeakSet Collection, otherwise it returns false.

    Let's see the functionality of all the above methods in an example,

    ```javascript
    var weakSetObject = new WeakSet();
    var firstObject = {};
    var secondObject = {};
    // add(value)
    weakSetObject.add(firstObject);
    weakSetObject.add(secondObject);
    console.log(weakSetObject.has(firstObject)); //true
    weakSetObject.delete(secondObject);
    ```

97. What is a WeakMap

    The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. In this case, keys must be objects and the values can be arbitrary values. The syntax is looking like as below,

    ```javascript
    new WeakMap([iterable]);
    ```

    Let's see the below example to explain it's behavior,

    ```javascript
    var ws = new WeakMap();
    var user = {};
    ws.set(user);
    ws.has(user); // true
    ws.delete(user); // removes user from the map
    ws.has(user); // false, user has been removed
    ```

98. What are the differences between WeakMap and Map

    The main difference is that references to key objects in Map are strong while references to key objects in WeakMap are weak. i.e, A key object in WeakMap can be garbage collected if there is no other reference to it.
    Other differences are,

    1.  Maps can store any key type Whereas WeakMaps can store only collections of key objects
    2.  WeakMap does not have size property unlike Map
    3.  WeakMap does not have methods such as clear, keys, values, entries, forEach.
    4.  WeakMap is not iterable.

99. List down the collection of methods available on WeakMap

    Below are the list of methods available on WeakMap,

    1.  set(key, value): Sets the value for the key in the WeakMap object. Returns the WeakMap object.
    2.  delete(key): Removes any value associated to the key.
    3.  has(key): Returns a Boolean asserting whether a value has been associated to the key in the WeakMap object or not.
    4.  get(key): Returns the value associated to the key, or undefined if there is none.
        Let's see the functionality of all the above methods in an example,

    ```javascript
    var weakMapObject = new WeakMap();
    var firstObject = {};
    var secondObject = {};
    // set(key, value)
    weakMapObject.set(firstObject, 'John');
    weakMapObject.set(secondObject, 100);
    console.log(weakMapObject.has(firstObject)); //true
    console.log(weakMapObject.get(firstObject)); // John
    weakMapObject.delete(secondObject);
    ```

100.  What is the purpose of uneval?

      The uneval() is an inbuilt function which is used to create a string representation of the source code of an Object. It is a top-level function and is not associated with any object. Let's see the below example to know more about it's functionality,

      ```javascript
      var a = 1;
      uneval(a); // returns a String containing 1
      uneval(function user() {}); // returns "(function user(){})"
      ```

101.  What is the difference between uneval and eval?

      The `uneval` function returns the source of a given object; whereas the `eval` function does the opposite, by evaluating that source code in a different memory area. Let's see an example to clarify the difference,

      ```javascript
      var msg = uneval(function greeting() {
        return 'Hello, Good morning';
      });
      var greeting = eval(msg);
      greeting(); // returns "Hello, Good morning"
      ```

102.  What is an anonymous function?

      An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below,

      ```javascript
      function (optionalParameters) {
        //do something
      }

      const myFunction = function(){ //Anonymous function assigned to a variable
        //do something
      };

      [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
        //do something
      });
      ```

      Let's see the above anonymous function in an example,

      ```javascript
      var x = function (a, b) {
        return a * b;
      };
      var z = x(5, 10);
      console.log(z); // 50
      ```

103.  What is the precedence order between local and global variables?

      A local variable takes precedence over a global variable with the same name. Let's see this behavior in an example.

      ```javascript
      var msg = 'Good morning';
      function greeting() {
        msg = 'Good Evening';
        console.log(msg);
      }
      greeting();
      ```

104.  What are javascript accessors?

      ECMAScript 5 introduced javascript object accessors or computed properties through getters and setters. Getters uses the get keyword whereas Setters uses the set keyword.

      ```javascript
      var user = {
        firstName: 'John',
        lastName: 'Abraham',
        language: 'en',
        get lang() {
          return this.language;
        },
        set lang(lang) {
          this.language = lang;
        },
      };
      console.log(user.lang); // getter access lang as en
      user.lang = 'fr';
      console.log(user.lang); // setter used to set lang as fr
      ```

105.  How do you define property on Object constructor

      The Object.defineProperty() static method is used to define a new property directly on an object, or modify an existing property on an object, and returns the object. Let's see an example to know how to define property,

      ```javascript
      const newObject = {};

      Object.defineProperty(newObject, 'newProperty', {
        value: 100,
        writable: false,
      });

      console.log(newObject.newProperty); // 100

      newObject.newProperty = 200; // It throws an error in strict mode due to writable setting
      ```

106.  What is the difference between get and defineProperty?

      Both have similar results until unless you use classes. If you use get the property will be defined on the prototype of the object whereas using Object.defineProperty() the property will be defined on the instance it is applied to.

107.  What are the advantages of Getters and Setters?

      Below are the list of benefits of Getters and Setters,

      1.  They provide simpler syntax
      2.  They are used for defining computed properties, or accessors in JS.
      3.  Useful to provide equivalence relation between properties and methods
      4.  They can provide better data quality
      5.  Useful for doing things behind the scenes with the encapsulated logic.

108.  Can I add getters and setters using defineProperty method?

      Yes, You can use the `Object.defineProperty()` method to add Getters and Setters. For example, the below counter object uses increment, decrement, add and subtract properties,

      ```javascript
      var obj = { counter: 0 };

      // Define getters
      Object.defineProperty(obj, 'increment', {
        get: function () {
          this.counter++;
        },
      });
      Object.defineProperty(obj, 'decrement', {
        get: function () {
          this.counter--;
        },
      });

      // Define setters
      Object.defineProperty(obj, 'add', {
        set: function (value) {
          this.counter += value;
        },
      });
      Object.defineProperty(obj, 'subtract', {
        set: function (value) {
          this.counter -= value;
        },
      });

      obj.add = 10;
      obj.subtract = 5;
      console.log(obj.increment); //6
      console.log(obj.decrement); //5
      ```

109.  What are the function parameter rules?

      JavaScript functions follow below rules for parameters,

      1. The function definitions do not specify data types for parameters.
      2. Do not perform type checking on the passed arguments.
      3. Do not check the number of arguments received.

      i.e, The below function follows the above rules,

      ```javascript
      function functionName(parameter1, parameter2, parameter3) {
        console.log(parameter1); // 1
      }
      functionName(1);
      ```

110.  What is an error object?

      An error object is a built in error object that provides error information when an error occurs. It has two properties: name and message. For example, the below function logs error details,

      ```javascript
      try {
        greeting('Welcome');
      } catch (err) {
        console.log(err.name + '<br>' + err.message);
      }
      ```
