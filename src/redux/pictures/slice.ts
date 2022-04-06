import {createSlice} from '@reduxjs/toolkit'

const initialState: string[] = []

const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
    setImages: (state, action) => {
      const newState: string[] = []
      action.payload.map((item: string) => newState.push(item))
      return newState
    },
    clearImages: () => {
      return []
    }
  }
})

export default picturesSlice.reducer
export const {setImages, clearImages} = picturesSlice.actions
