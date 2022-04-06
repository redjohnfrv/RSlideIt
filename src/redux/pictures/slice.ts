import {createSlice} from '@reduxjs/toolkit'

export interface IPicture {
  id: string
  pic: string
}

const initialState: IPicture[] = []

const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
    setImages: (state, action) => {
      const newState: IPicture[] = []
      action.payload.forEach((item: string) => {
        newState.push({id: item.slice(30, 100), pic: item})
      })
      return newState
    },
    clearImages: () => {
      return []
    }
  }
})

export default picturesSlice.reducer
export const {setImages, clearImages} = picturesSlice.actions
