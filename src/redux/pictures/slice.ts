import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuid} from 'uuid'

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
        newState.push({id: uuid(), pic: item})
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
