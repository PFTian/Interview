1. What is a Regular Expression?

   A regular expression is a sequence of characters that forms a search pattern. You can use this search pattern for searching data in a text. These can be used to perform all types of text search and text replace operations. Let's see the syntax format now,

   ```javascript
   /pattern/modifiers;
   ```

   For example, the regular expression or search pattern with case-insensitive username would be,

   ```javascript
   /John/i;
   ```

2. What are the string methods available in Regular expression?

   Regular Expressions has two string methods: `search()` and `replace()`.
   The `search()` method uses an expression to search for a match, and returns the position of the match.

   ```javascript
   var msg = 'Hello John';
   var n = msg.search(/John/i); // 6
   ```

   The `replace()` method is used return a modified string where the pattern is replaced.

   ```javascript
   var msg = 'Hello John';
   var n = msg.replace(/John/i, 'Buttler'); // Hello Buttler
   ```

3. What are modifiers in regular expression?

   Modifiers can be used to perform case-insensitive and global searches. Let's list down some of the modifiers,

   | Modifier | Description                                             |
   | -------- | ------------------------------------------------------- |
   | i        | Perform case-insensitive matching                       |
   | g        | Perform a global match rather than stops at first match |
   | m        | Perform multiline matching                              |

   Let's take an example of global modifier,

   ```javascript
   var text = 'Learn JS one by one';
   var pattern = /one/g;
   var result = text.match(pattern); // one,one
   ```

4. What are regular expression patterns?

   Regular Expressions provided group of patterns in order to match characters. Basically they are categorized into 3 types,

   1. **Brackets:** These are used to find a range of characters.
      For example, below are some use cases,
      1. [abc]: Used to find any of the characters between the brackets(a,b,c)
      2. [0-9]: Used to find any of the digits between the brackets
      3. (a|b): Used to find any of the alternatives separated with |
   2. **Metacharacters:** These are characters with a special meaning
      For example, below are some use cases,
      1. \d: Used to find a digit
      2. \s: Used to find a whitespace character
      3. \b: Used to find a match at the beginning or ending of a word
   3. **Quantifiers:** These are useful to define quantities
      For example, below are some use cases,
      1. n+: Used to find matches for any string that contains at least one n
      2. n\*: Used to find matches for any string that contains zero or more occurrences of n
      3. n?: Used to find matches for any string that contains zero or one occurrences of n

5. What is a RegExp object?

   RegExp object is a regular expression object with predefined properties and methods. Let's see the simple usage of RegExp object,

   ```javascript
   var regexp = new RegExp('\\w+');
   console.log(regexp);
   // expected output: /\w+/
   ```

6. How do you search a string for a pattern?

   You can use test() method of regular expression in order to search a string for a pattern, and returns true or false depending on the result.

   ```javascript
   var pattern = /you/;
   console.log(pattern.test('How are you?')); //true
   ```

7. What is the purpose of exec method?

   The purpose of exec method is similar to test method but it executes a search for a match in a specified string and returns a result array, or null instead of returning true/false.

   ```javascript
   var pattern = /you/;
   console.log(pattern.test('How are you?')); //you
   ```
