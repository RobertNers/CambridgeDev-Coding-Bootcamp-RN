import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import "./App.css";
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


function LoginStatus({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? "Welcome Back!" : "Please, log in."}</h1>
  )
}

*/

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

/*
function TaskList({ tasks }) {
  const list = tasks.map((item) => <li key={item.id}>{item.title}</li>)
  return <ul>{list}</ul>
}
const tasks = [
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Task 2' },
];


function TaskList({ tasks }) {
  const list = tasks
    .filter((item) => !item.completed)
    .map((item) => <li key={item.id}>{item.title}</li>);
  return (
    <>
      {list.length === 0 ? (
        <p>All tasks completed!</p>
      ) : (
        <ul>{list}</ul>
      )}
    </>
  );
}

const tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
];

const tasks2 = [
  { id: 1, title: 'Task 1', completed: true },
  { id: 2, title: 'Task 2', completed: true },
];

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ lineHeight: "3rem" }}>
          <TemperatureIndicator temp={40} />
          <TemperatureIndicator temp={12} />
          <TemperatureIndicator temp={20} />
        </div>
        <Hyeastan />
      </div>
      <TaskList tasks={tasks} />
      <TaskList tasks={tasks2} />
    </>
  )
}


export default App
*/

function Uboa() {
  return <div className="uboa">
    <a href="/">あ</a>
    {"あ".repeat(99999)}
  </div>
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/nonsense">MYSTERY</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/nonsense" element={<Uboa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
