import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import Navbar from './components/Navbar/Navbar';
const data =require('./data/db.json');

function App() {
  return (
    <>
   <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element={<Home data={data}/>} />
      <Route path="/city/:id" element={<TourDetails />} />
    </Routes>
    </>
  );
}

export default App;
