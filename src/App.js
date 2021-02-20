import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import Login from './Views/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import More from './Views/More/More';
import Profile from './Views/Profile/Profile';
import { ToastContainer } from 'react-toastify'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) 
      props.history.push('/login');
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/' component={NavBar} />
      </Switch>
      <Switch>
        <Route exact path='/more' component={More} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
