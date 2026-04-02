import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    searchSuggestions: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { searchSuggestions } = SearchSlice.actions;
export default SearchSlice.reducer;
