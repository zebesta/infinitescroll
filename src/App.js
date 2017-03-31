import React, { Component } from 'react';
import { TextComp } from './textcomp';
import { Stream } from './stream'
import logo from './logo.svg';
import './App.css';
import { sampletext } from './sampletxt'



export const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p>A simple example text comp with default data:</p>
    <TextComp />
    <p>Heres the actual stream below:</p> 
    <Stream />
  </div>
)
