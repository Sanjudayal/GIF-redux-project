import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchSubmit = (keyword) => {
    console.log("Searching for:", keyword);
  };

  return (
    // The min-h-screen and bg-slate-950 classes ensure the dark theme covers the entire window
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 py-6">
      <SearchBar 
        query={searchKeyword} 
        setQuery={setSearchKeyword} 
        onSearch={handleSearchSubmit} 
      />
    </div>
  );
}

export default App;
