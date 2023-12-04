import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/LoginComponent';
import Signup from './components/SignUp/Signup';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <Login onToggleView={handleToggleView} />
      ) : (
        <Signup onToggleView={handleToggleView} />
      )}
    </>
  );
}

export default App;
