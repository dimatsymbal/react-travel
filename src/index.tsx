import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content';

interface ITitleProps {
    text:string;
}

const Title = (props:ITitleProps) => {
    return <h1>Hello {props.text}</h1>
}




function App () {
  return (
    <>
      <Title text='React'/>
      <Title text='TS'/>
      <Content text1='text1' text2='text2' year={2002}/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
