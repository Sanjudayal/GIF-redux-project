import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

function App() {
  const handleSearchSubmit = (keyword) => {
    console.log("Searching for:", keyword);
  };

  return (
    // The min-h-screen and bg-slate-950 classes ensure the dark theme covers the entire window
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 py-6">
      <SearchBar />

      <Tabs />
    </div>
  );
}

export default App;
