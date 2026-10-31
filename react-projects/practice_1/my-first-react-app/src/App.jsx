import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const sam = { test: "shmest", name: "Sam", greeting: "What's up" };
function App() {
  //  const [count, setCount] = useState(0)
  return (
    <>
      Hello
      <Card user={sam} />
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
  </>);
}
export default App
