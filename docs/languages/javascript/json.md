# JSON

1. What is JSON?

   JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.

2. What are the syntax rules of JSON?

   Below are the list of syntax rules of JSON

   1. The data is in name/value pairs
   2. The data is separated by commas
   3. Curly braces hold objects
   4. Square brackets hold arrays

3. What is the purpose JSON stringify?

   ```javascript
   var userJSON = { name: 'John', age: 31 };
   var userString = JSON.stringify(user);
   console.log(userString); //"{"name":"John","age":31}"
   ```

4. How do you parse JSON string?

   When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

   ```javascript
   var userString = '{"name":"John","age":31}';
   var userJSON = JSON.parse(userString);
   console.log(userJSON); // {name: "John", age: 31}
   ```

5. Why do you need JSON ?

   When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.
