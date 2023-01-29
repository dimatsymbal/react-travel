import React from 'react'
import ReactDOM from 'react-dom/client'

interface ITitleProps {
    text:string;
}

const Title = (props:ITitleProps) => {
    return <h1>Hello {props.text}</h1>
}


interface IContentProps {
    text1:string;
    text2:string;
    year:number;
}

const Content = (props:IContentProps) => {
    return (
        <React.Fragment>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <div>Year:{props.year}</div>
        </React.Fragment>
    )
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
