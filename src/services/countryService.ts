import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  'country/fetchData',
  async (endpoint: string) => {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  }
);
