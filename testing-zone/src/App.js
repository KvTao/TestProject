import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Hello from './component/Hello'
import Message from './component/Message'

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name="Bruce" heroName="Batman">        
        <p>Children Props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
