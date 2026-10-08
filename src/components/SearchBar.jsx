import React from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = ({ queryText, setQueryText, onSearch }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(queryText));
    if (onSearch) {
      onSearch(queryText);
    }

    setQueryText("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 px-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        {/* Input Field with Two-Way Binding */}
        <input
          type="text"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          placeholder="Search for images, videos, or gifs..."
          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all duration-150"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
