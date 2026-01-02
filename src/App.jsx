import React, { useState } from "react";
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
