import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

/*
const sam = { test: "shmest", name: "Sam", greeting: "What's up" };
const disabled = { name: "dobby", dob: 2010, age: 12, bio: "lorem shmorem" }
function App() {
  //  const [count, setCount] = useState(0)
  return (
    <>
      Hello
      <Card user={sam}>This is a child</Card>
      <ProfileCard user={{ name: "bobby", dob: 1990, age: 12, bio: "lorem shmorem" }} isActive />
      <ProfileCard user={disabled} />
    </>
  );
}

function Card(props) {
  console.log(props);
  const { greeting, name } = props.user;
  // return <h1>Hi,  {name}</h1>;
  return (<>
    <h1>Hi {name}, {greeting}</h1>
    <p>lorem ipsum<br />{JSON.stringify(props)}</p>
    <h3>{props.children}</h3>
  </>);
}






// example component showing potential usecases
function ProfileCard(props) {
  const { dob, name, bio, age } = props.user;
  const error = dob > 2006;

  function handleClick() { alert("Hi") }

  return (<div style={{ opacity: props.isActive ? 1 : 0.4, backgroundColor: "beige", padding: "2rem", marginTop: "3rem" }}>
    <h1>Hi {name}</h1>
    {!error && <button onClick={handleClick}>Submit</button>}
    <br />
    <i>DOB: <span style={{ color: error ? "red" : "black" }}>{dob}</span></i>
    <p>
      {bio}
      <br />
      {error && <span style={{ color: "red" }}>Not allowed to use website</span>}
    </p>
  </div>)
}

*/


function LoginStatus({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? "Welcome Back!" : "Please, log in."}</h1>
  )
}

function TemperatureIndicator({ temp }) {
  const tempColors = { hot: "red", warm: "orange", cold: "blue", };
  const tempDescriptor =
    temp > 30 ? "hot" :
      temp > 15 ? "warm" :
        "cold";
  // this could/should have been a helper function
  return (
    <p>It's currently {""}
      <span style={{ color: tempColors[tempDescriptor] }}>
        {tempDescriptor}
      </span>
    </p>
  )
}

function Hyeastan() {
  return (
    <div>
      <div style={{ backgroundColor: "red", height: "4rem", width: "19rem" }}></div>
      <div style={{ backgroundColor: "blue", height: "4rem", width: "19rem" }}></div>
      <div style={{ backgroundColor: "orange", height: "4rem", width: "19rem" }}></div>
    </div>
  )
}



function App() {
  return (
    <>
      <LoginStatus isLoggedIn={true} />
      <LoginStatus isLoggedIn={false} />
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ lineHeight: "3rem" }}>
          <TemperatureIndicator temp={40} />
          <TemperatureIndicator temp={12} />
          <TemperatureIndicator temp={20} />
        </div>
        <Hyeastan />
      </div>
    </>
  )
}


export default App
