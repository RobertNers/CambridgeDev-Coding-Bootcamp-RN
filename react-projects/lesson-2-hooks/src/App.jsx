import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { GetLoginStatus } from './components/log-in-status.jsx'

const spamParagraph = "VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD VERY LONG PARAGRAPH THAT IS LONG AND LOUD"


function App() {
  let [loginStatus, setLoginStatus] = useState(false)
  function handleStatus() {
    setLoginStatus(loginStatus = !loginStatus)
  }
  return (
    <>
      Hello World :)

      <button
        style={{
          width: "5rem",
          margin: "1rem auto",
          padding: "0.5rem 1rem"
        }}
        onClick={handleStatus}
      >
        Log in
      </button>

      <GetLoginStatus status={loginStatus} />
      <Collapser parag={spamParagraph} />

    </>
  )
}

function Collapser({ parag }) {
  let [isVisible, toggleVis] = useState(false)
  function handleVis() {
    toggleVis(isVisible = !isVisible)
  }

  return (
    <>
      <button
        style={{
          width: "5rem",
          margin: "1rem auto",
          padding: "0.5rem 1rem"
        }}
        onClick={handleVis}
      >
        {isVisible ? "Hide text" : "Show text"}
      </button>
      {isVisible ? parag : null}
    </>
  )
}






export default App
