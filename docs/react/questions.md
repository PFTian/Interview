# React Interview Questions

### 1. What is React?

* React is front-end JavaScript library developed by facebook in 2011.
* It follows the component based approach which helps in building **resuable UI components**
* It is used for developing complex and interactive web and mobile UI.

### 2. What are the features of React?

* It uses the **virtual DOM** instead of the real DOM.
* It uses **server-side rendering**.
* it follows **uni-directional data flow** or **data binding**.

### 3. List some of the major advantages of React.

* It increases the application's performance.
* It can be conveniently used on the client as well as server side.
* Because of JSX, code readability increases.
* React is easy to integrate with other framework like Meteor, Angular, etc.

### 4. What are the limitations of React?

* React is just a library, not a full-blown framework
* Its library is very large and takes time to understand
* It can be difficult for the novice programmers to understand
* Coding gets complex as it uses inline templating and JSX

### 5. What is the difference between Real DOM and Virtual DOM?

| Virual DOM | Real DOM |
| ---------- | -------- |
| It updates slow | It updates faster |
| Can directly update HTML | Can't directly update the HTML |
| Create a new DOM if element updates | Updates JSX if element updates |
| DOM manipulations is very expensive | DOM manipulation is very easy |
| Too much of memory wastage | No memory wastage |

### 6. What do you understand by Virtual DOM? Explain how it works.

A virtual DOM is a **lightWeight JavaScript object** which originally is just **the copy of the real DOM**. it is node tree that lists the elements, their attributes and content as Objects and their properties. React's render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.

The Virtual DOM works in three simple steps.

1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

2. Then the difference between the previous DOM representation and the new one is calculated.

3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

### 7. What is JSX?

JSX is a XML-like syntax extension to ECMAScript (the acroym stands for JavaScript XML). This is a type of file used by React which utilizes the expressiveness of Javascript along with HTML like template syntax. This makes the HTML file really easy to understand. JSX syntax can be compiled by Babel.

### 8. Why can't browsers read JSX?

Browsers can only read JavaScript objects but JSX is not a regular JavaScript object. Thus to enbale a browser to read JSX, we need to transform JSX file into a JavaScript object like using Babel and then pass it to the broswer.

### 9. How is React different from Angular?

| TOPIC | REACT | ANGULAR |
| ----- | ----- | ------- |
| Architecture | Only the view of MVC | Complete MVC |
| Rendering | Server-side rendering | Client-side rendering |
| DOM | Uses virtual DOM | Uses real DOM |
| Data Binding | One-way data binding | Two-way data binding |
| Debugging | Compile time debugging | Runtime debugging |
| Author | Facebook | Google |

### 10. Stateful component (class component) VS Stateless component (functional component)

| Stateful component (class component) | stateless component (functional component) |
| ------------------------------------ | ------------------------------------------ |
| Stores info about component's state change in memory | Calculates the internal state of the components |
| Have authority to change state | Do not have authority to change state |
| Contains the knowledge of past, current and possible future changes in state | Contains no knowledge of past, current and possible future changes in state |
| Stateless components notify them about the requirement of the state change, then they send down the props to them | They receive the props from stateful components and treat them as callback functions |

### 11. What are the different phases of React component's lifecycle?

There are three different phases of React component's lifecycle:

1. *Initial Rendering Phase:* This is the phase when the component is about to start its life journey and make its way to the DOM.

2. *Updating Phase:* Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.

3. *Unmounting phase:* This is the final phase of a component's life cycle in which the component is destroyed and removed from the DOM.

### 12. Explain the lifecycle methods of React components in detail.

* Mounting
  * **constructor()**
  * static getDerivedStateFromProps()
  * **render()**
  * **componentDidMount()**

* Updating
  * static getDerivedStateFromProps()
  * shouldComponentUpdate()
  * **render()**
  * getSnapshotBeforeUpdate()
  * **componentDidUpdate()**

### 13. What are Higher Order Components(HOC)?

Higher Order Component is an advanced way of resuing the component logic. Basically, it's a pattern that is derived from React's compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won't modify or copy any behavior from their input components. You can say that HOC are `pure` component.

### 14. What do you understand from "In React, everything is a component".

Components are the building blocks of a React application's UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.

### 15. What is Props?

Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to parent component. This help in maintaining the unidirectional 

### 16. What is a state in React and how is it used?

States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. States are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components.

### 17.What is ref in React?

Ref is the shorthand for Reference in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.

### 18. List some of the cases when you should use Ref.

Following are the cases when ref should be used:

* When you need to manage focus, select text or media playback
* To trigger imperative animations
* Integrate with thrid-party DOM libraries.

### 19. What is Redux?

Redux is one of the hottest libraries for front-end development in today's marketplace. It is a predictable state container for JavaScript applications and is used for the entire applications state management. Applications developed with Redux are easy to test and can run in different environments showing consistent behavior.

### 20. What are the three principles that Redux follows?

1. **_Single source of thuth:_** The state of the entire application is stored in an object/state tree within a single store. The single state tree makes it easier to kepp track of changes over time and debug or inspect the application.

2. **_State is read-only:_** The only way to change the state is to trigger an action. An action is a plain JS object describing the change. Just like state is the minimal representation of data, the action is the minimal representation of the change to that data.

3. **_Changes are made with pure functions:_** In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depends solely on the values of their arguments.

### 21. What do you understand by "Single source of truth"?

Redux uses `Store` for storing the application's entire state at one place. So all the component's state are stored in the Store and they receive updates from the Store itself. the sigle state tree makes it easier to keep track of changes over time and debug or inspect the application.

### 22. List down the components of Redux.

Redux is composed of the following components:

* **Action:** It's an object that describes what happened.
* **Reducer:** It is a place to determine how the state will change.
* **Store:** State/Object tree of the entire application is saved in the Store.
* **view:** Simply displays the data provided by the Store.

### 23. What are the advantages of Redux?
Advantages of Redux are listed below:

* **Predictability of outcome:** Since there is always one source of truth, i.e. the store, there is no confusion about how to sync the current state with actions and other parts of the application.

* **Maintainablility:** The code becomes easier to maintain wih a predictable outcome and strict structure.

* **Server-side rendering:** You just need to pass the store created on the server, to the client side. This is very useful for initial render and provides better user experience as it optimizes the application performance.

* **Developer tools:** From actions to state changes, developers can track everything going onin the application in real time.

* **Community and ecosystem:** Redux has a huge community behind it which makes it even more captivating to use. A large community of talented individuals contribute to the betterment of the library and develop various applications with it.

* **Ease of testing:** Redux's code is mostly functions which are small, pure and isolated. This makes the code testable and independent.

* **Organization:** redux is precise about how code should be organised, this makes the code more consistent and easier when a team works with it.
