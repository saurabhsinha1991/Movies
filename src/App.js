import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={SignUp} />
              </Switch>
          </Router>
      </div>
  );
}

export default App;
