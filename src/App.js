import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import Login from './Views/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import More from './Views/More/More';
import Profile from './Views/Profile/Profile';
import Recommendation from './Views/Recommendation/Recommendation';
import Blogs from './Views/Blogs/Blogs';
import Blog from './Views/Blog/Blog';
import Notifications from './Views/Notifications/Notifications';
import Notification from './Views/Notification/Notification';
import StudentCenter from './Views/StudentCenter/StudentCenter';
import Test from './Views/Test/Test';
import QuestionBank from './Views/QuestionBank/QuestionBank';
import Questions from './Views/Questions/Questions';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = (props) => {
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
        <Route exact path='/recommendation' component={Recommendation} />
        <Route exact path='/blogs&faqs' component={Blogs} />
        <Route exact path='/blogs&faqs/:id' component={Blog} />
        <Route exact path='/notification' component={Notifications} />
        <Route exact path='/notification/:id' component={Notification} />
        <Route exact path='/student_center' component={StudentCenter} />
        <Route exact path='/student_center/:testId' component={Test} />
        <Route exact path='/question_bank' component={QuestionBank} />
        <Route exact path='/question_bank/:subject/:topic' component={Questions} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;