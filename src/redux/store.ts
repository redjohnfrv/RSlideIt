import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer'

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export {store}
