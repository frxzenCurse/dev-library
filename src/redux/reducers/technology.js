import { createSlice } from '@reduxjs/toolkit'
import { fetchTechnologies } from './actionCreators'

const initialState = {
  technologies: [],
  isLoading: false,
  error: '',
}

const technologySlice = createSlice({
  name: 'technology',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTechnologies.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = ''
      state.technologies = action.payload
    },
    [fetchTechnologies.pending]: (state, action) => {
      state.isLoading = true
    },
    [fetchTechnologies.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const { addItem, removeItem, setItems } = technologySlice.actions
export default technologySlice.reducer  