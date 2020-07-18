import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './hoc/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from './Auth';

function App() {
  return (
      <div className="App">
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <PrivateRoute path="/" component={Home} />
                </Switch>
            </Router>
        </AuthProvider>
      </div>
  );
}

export default App;
