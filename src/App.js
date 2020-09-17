import React from 'react';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    // BEM  naming convention
    <div className="App">
      <h1>Hello</h1>
      {/*Header */}
      <Header />
      <div className="app_body">
        {/*Sidebar */}
        {/*React-router */}
      </div>

    </div>
  );
}

export default App;
