import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../services/countryService";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    loading: true,
    countries: [],
    error: "",
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.status = "Pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "Success";
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.status = "Failed";
        state.error = action.error.message ? action.error.message : "";
      });
  },
});


export default countrySlice.reducer;
