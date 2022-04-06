import {RootState} from '../store'

export const selectPictures = (state: RootState) =>
  state.pictures.map((item: string) => item)
