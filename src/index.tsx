import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                perspiciatis explicabo non illum dolores incidunt ipsam
                molestias aliquam ipsa nulla quam quia, quaerat rerum fugiat,
                velit eligendi ducimus vel alias?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                perspiciatis explicabo non illum dolores incidunt ipsam
                molestias aliquam ipsa nulla quam quia, quaerat rerum fugiat,
                velit eligendi ducimus vel alias?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                perspiciatis explicabo non illum dolores incidunt ipsam
                molestias aliquam ipsa nulla quam quia, quaerat rerum fugiat,
                velit eligendi ducimus vel alias?
            </p>
        </React.Fragment>
    )
}

function App () {
  return (
    <>
      <Title />
      <Content />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
