import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Login from './components/Login';
import Form from './components/Form';
import Profile from './components/Profile';
import Sign from './components/Sign';
import ChatBot from './components/ChatBot';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </div>
  );
};

export default App;