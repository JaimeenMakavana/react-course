1.**what is CDN ?**

- purpose: user engagement and retention.

2. **createElement?**

- used to create virtual DOM elements.
  -function(type, config, children){
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props)
  }
  -config: An object containing configuration options for the element, such as ref, key, and other props.

  3.**why does createRoot come from reactDOM rather than react?**
  -the entry point for rendering a React application
  -In a metaphorical sense, think of createRoot as a gardener preparing the soil for planting. It checks if the soil (container) is suitable, adds nutrients (options) if necessary, plants the seeds (creates a container), marks the planting area (marks container as root), listens for environmental changes (event handling), and then presents the newly created garden (returns ReactDOMRoot).

  4.**what is costly operation in browser ?**

  5. **what purpose does this serve {} -> createElement("h1", {}, "hello world!")**?
     -all attributes of the element will be here

  6.**what are props?**

- attributes + children

  7.**what does createElement do?**

  <!-- {
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {
  "id": "heading",
  "xyz": "abc",
  "children": "hello world!"
  },
  "\_owner": null,
  "\_store": {}
  } -->

  8.**what does root.render method do?**

- it takes react element object as argument and convert it into something that browser understand.

  9.**what is crossorigin?**
  `<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"

  > </script>`
  > -You can use the following element to tell a browser to execute the https://example.com/example-framework.js script without sending user-credentials.

  10.**why it is library rather then framework?**
  -answer lies here!
  -you can start working small portion in any project, this is beauty of library

`<h1>hello heaeder</h1>
    <div id="root">
      <h1>jaimeen is here</h1>
      <!-- it will be replaced by render method -->
      <!-- try to play with code, have curiocity -->
    </div>
    <h1>hello footer</h1>`

10. **what is motive of lecture two?**

- current code is not production ready code, why?
- creating own small create-react-app

11. **can react it self create fast production ready app?**
    -no. there are lot of other code, library, packages to make it fast, not just react.
