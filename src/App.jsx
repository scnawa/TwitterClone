import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './sidebar.css'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed'
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/** Feed */}
      <Feed/>
      {/** Ads */}
      <Widgets/>
    </div>
  );
}

export default App;
