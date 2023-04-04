import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import data from './data/db.json';
import Home from './components/home/Home'
import TourDetails from './components/TourDetails/TourDetails';


function App() {
  return (
    <>
    <Home data={data}></Home>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/city/:id" element={<TourDetails />} />
    </Routes>
    </>
  );
}

export default App;
