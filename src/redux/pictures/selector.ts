import {RootState} from '../store'
import {IPicture} from './slice'

export const selectPictures = (state: RootState) =>
  state.pictures.map((item: IPicture) => item)
