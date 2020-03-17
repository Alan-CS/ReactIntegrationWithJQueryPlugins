// 2020-03-17 : Modified version of app from  https://reactjs.org/docs/integrating-with-other-libraries.html


import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chosen from "./Chosen";

function App() {
  return (
      <Chosen onChange={value => console.log(value)}>
        <option>vanilla</option>
        <option>chocolate</option>
        <option>strawberry</option>
      </Chosen>
  );
}

export default App;
