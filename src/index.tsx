import React from 'react'
import ReactDOM from 'react-dom/client'
import {Content} from './Content';
import { Title } from './Title';


function App () {
  return (
    <>
      <Title text='React'/>
      <Title text='TS'/>
      <Content text1='lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1lorem1' 
      text2='lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2' year={2002}/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
