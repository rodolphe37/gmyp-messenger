import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    // BEM  naming convention
    <div className="App">
      <h1>Hello</h1>
      {/*Header */}
      <Header />
      <div className="app_body">
        {/*Sidebar */}
        <Sidebar />
        {/*React-router */}
      </div>

    </div>
  );
}

export default App;
