import React from 'react'
import ReactDOM from 'react-dom/client'

const h1 = React.createElement("h1", {class: "Title"}, "Big title in React page")
const p = React.createElement("p", {id:"paragraph1"}, "lorem")
const list = React.createElement("ul", {class:"list_under_paragraph"}, React.createElement("li", {class: "list_item"}, "List Element 1"), 
React.createElement("li", {class: "list_item"}, "List Element 2"),
React.createElement("li", {class: "list_item"}, "List Element 3"),
React.createElement("li", {class: "list_item"}, "List Element 4"))


const structure = <div>
  {h1}
  {list}
  {p}
</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{structure}</React.StrictMode>)
