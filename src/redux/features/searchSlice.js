import { createSlice } from "@reduxjs/toolkit";

const searchSlice = {
  name: "search",
  initialState: {
    query: "",
    activeTab: "",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTabs(state, action) {
      state.activeTab = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = true;
      state.error = null;
    },
    setErrror(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.results = [];
    },
  },
};

export const { setQuery, setActiveTabs, setLoading, setResults, setErrror } =
  searchSlice.actions;

export default searchSlice.reducers;
