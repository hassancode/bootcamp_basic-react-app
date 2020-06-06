import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello.js';

function App({n}) {
  return (
    <div>hello from App.js, second update - {n}
    <br/>
    <p>bellow is child component</p>
    <Hello/>
    </div>
  );
}

export default App;
