import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Analysis from './components/Analysis';
// import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';


const App = () => {
  return (
    <>
      <Router >
      <Navbar />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="analysis" element = {<Analysis />}/>
          <Route path="login" element = {< Login/>}/>
          <Route path="signup" element = {< Signup />}/>
          <Route path="*" element = {< Error />}/>
        </Routes>
      </Router>

    </>
    
  )
};

export default App;
