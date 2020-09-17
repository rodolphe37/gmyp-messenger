import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    // BEM  naming convention
    <div className="App">
      <Router>
        {/*Header */}
        <Header />
        <div className="app_body">
          {/*Sidebar */}
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <h1>CHAT SCREEN</h1>
              {/*<Chat />*/}
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
          {/*React-router --> chat screen */}

        </div>
      </Router>
    </div>
  );
}

export default App;
