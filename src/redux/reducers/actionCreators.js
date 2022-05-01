import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../../data/config'

export const fetchTechnologies = createAsyncThunk(
  'tech/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/technologies`)
      console.log(response.data);
      return response.data
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("Не удалось загрузить технологии")
    }
  }
)