import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from './components/home/Home'
import TourDetails from './components/TourDetails/TourDetails';


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/city/:id" element={<TourDetails />} />
    </Routes>
    </>
  );
}

export default App;
