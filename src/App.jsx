// style
import './App.css';
// router-dom
import { Outlet } from 'react-router-dom';
// components
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { onAuthStateChanged } from 'firebase/auth';
// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );

};

export default App;
