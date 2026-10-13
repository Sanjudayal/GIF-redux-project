import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { CollectioinPage } from "./pages/CollectioinPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    // The min-h-screen and bg-slate-950 classes ensure the dark theme covers the entire window
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 py-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectioinPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
