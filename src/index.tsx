import React from 'react'
import ReactDOM from 'react-dom/client'

// const h1 = React.createElement("h1", {class: "Title"}, "Big title in React page")
// const p = React.createElement("p", {id:"paragraph1"}, "lorem")
// const list = React.createElement("ul", {class:"list_under_paragraph"}, React.createElement("li", {class: "list_item"}, "List Element 1"), 
// React.createElement("li", {class: "list_item"}, "List Element 2"),
// React.createElement("li", {class: "list_item"}, "List Element 3"),
// React.createElement("li", {class: "list_item"}, "List Element 4"))

// __________________________________________tsx_____________________________________________

const h1 = <h1 id = "title">Big title in React page</h1>
const p = <p id = "paragraph1">lorem,lorem,lorem,lorem,lorem,lorem</p>
const img = <img src="https://html.com/wp-content/uploads/very-large-flamingo.jpg" alt="img1"></img>
const buttonFinish = <button id = "btn_finish">Click me!</button>
const list = <ul id="list_spisok">
  <li id = "list_item1">List Element 1</li>
  <li id = "list_item2">List Element 2</li>
  <li id = "list_item3">List Element 3</li>
  <li id = "list_item4">List Element 4</li>
  <li id = "list_item5">List Element 5</li>
  <li id = "list_item6">List Element 6</li>
  <li id = "list_item7">List Element 7</li>
</ul>

const structure = <div>
  {h1}
  {list}
  {p}
  {img}
  {buttonFinish}
</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{structure}</React.StrictMode>)
