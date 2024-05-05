// in javascript, createElement method will do same
// with less feature
// const header = React.createElement("h1", {}, "hello world!");
// const header = React.createElement("h1", { id: "heading", xyz: 'abc' }, "hello world!");
// console.log('header', header);

// creating nested elements
// const parent = React.createElement('div', { id: 'parent' },
//     React.createElement('div', { id: 'child' },
//         React.createElement('h1', {}, 'hello child h1')))

// what if someone needs to create siblings
const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'hello child h1'), React.createElement('h2', {}, 'hello child h2')]))

// thats why jsx is exist.

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log('root', root);

root.render(parent);

// creating nested elements
// const parent = React.createElement('div', { id: 'parent' },
//     React.createElement('div', { id: 'child' },
//         React.createElement('h1', {}, 'hello child h1')))