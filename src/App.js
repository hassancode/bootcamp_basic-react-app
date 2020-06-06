import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Hello from './hello.js';

function App({n}) {
  return (
    <div>hello from App.js, second update - {n}
    <br/>
    <p>bellow is child component</p>
    <Hello/>
=======

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 5347eb71f6202da2d7f553d6e6a365b70089d3ed
    </div>
  );
}

export default App;
