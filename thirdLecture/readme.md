### third lecture

**creating script?**
-'start':'parcel index.html'
-'build':'parcel build index.html'
-industry standard(create script)
**what is react element?**
-const heading =
`React.createElement('h1',{id:"heading"}, "hello jaimeen");`
-its at the end of the day, is object -> when we render this element into the dom then it become html element
**how do we render?**
-core react create element but reactDOM will be responsible for rendering -`ReactDOM.createRoot()` -`root.render()`
**what happened behind the scene?**
-it will replace by heading by reactDOM
**what was need to jsx?**
-to solve/handle clumsyness of code in createElement(), -_jsx is not part of react_
-jsx makes developer life easy
**what is jsx?**
`const heading = <h1>hello react</h1>` -> this is jsx -_jsx is not html in javascript_
-it is html/xml(more closer to it then html) like syntax
-jsx is just syntax
-React.createElement is not developer friedly -_do we write code for machine or human?_
-for both(first for human then machine)
**is it valid javascript? const heading = <h1>hello</h1>**
-js has not build in jsx, above is not valid because js engine will not understand becuase js engine understand ecma Script-6 and other version, that is what browser n js enginer understand.
_then how does this code is working?_
-parcel is doing job behind the scene. even before code goes to the browser/or js enginer , it transpiled then js engine receive that browser can understand. -_does your reactDOM understand jsx?_ - no. before it transpiled then reaches to reactDOM.
_is parcel doing by itself?_-no, its like manager. Babel transpiled the code which can be understand by browser. parcel install this package.
_how many things browser can render?_ - for example , html and other stuff.
1.without jsx:React.createElement() =>JS Object => render as html element
2.with jsx :jsx -> React.createElement()
-babel not only transpile jsx code
-it transpile es-6 for older browser, its some javascript library
_keep your curiosity alive_

## assigment: various attributes of jsx element

-if you want to write multiline jsx then it must be wrap inside (), for babel to understand

## react component

**what is react component?**
-everything in react is component
-there are two types of component: class base and functional component
_what react functional component_
-just normal js function
-that return some jsx
_what is difference between jsx element and functional component_
-we can not render react component same way we do in react element -`root.render(header)` , `root.render(<Header/>)`
_what is component composition?_
**how can we put element in react component**
-react element is normal js variable -> write in curly braces
-any where in jsx, you can write any js code in this {}: superpower, you can inject any code between curly braces
-its very power thing, you should appreciate little thing
_can you create infinite loop in html ?_

\_const data = api.getApi()? what if attacker inject \_and will executing that piece of code : what can be done if any js code execute/run -> cross site scripting, it can steal cookies, session , localstorage
but jsx , it takes care of this injection attack _how?_
jsx except it, by sanitizing
