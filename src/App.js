import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Views/Login/Login';
import { AuthContext } from './Context/AuthContext';
import './App.css';

function App(props) {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) 
      props.history.push('/login');
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/' component={() => <h1>Home</h1>} />
      </Switch>
    </div>
  );
}

export default App;
