import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/chat/Chat'
import Login from './components/login/Login';
import { useStateValue } from './StateProvider';

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
            < React.Fragment >
              < Header />
              <div className="app_body">
                {/*Sidebar */}
                <Sidebar />
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>
                </Switch>
              </div>
            </React.Fragment>
          )}
      </Router>
    </div >
  );
}

export default App;
