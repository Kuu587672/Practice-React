// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// Learing Day-1
/*
function Header(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Button() {
  function handleClick() {
    alert('Button clicked!');
  }
  return <button onClick={handleClick}>Click me!</button>;
}

function App() {
  return (
    <div>
      <Header name="Subhankar" />
      <p>Welcome to my site.</p>
      <Button />
    </div>
  )
}

export default App
*/

// Project-1

import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Profile Card</h1>

      <ProfileCard
        name="Ranadeb Roy"
        role="Web Developer"
        image="/profile-pic.jpg"
      />
    </div>
  );
}

export default App;