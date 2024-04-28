import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'



function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser ="chai aur react"

const reactElement =React.createElement(
  'a',
  {href:'https://google.com',target:'_black'},
  'click me to visit google',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />

    // <MyApp/>
//can be run in these way too
// MyApp()

  //  </React.StrictMode> 

  // calling by object
  // anotherElement

  reactElement
)
