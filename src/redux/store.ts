import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {rootReducer} from './rootReducer'

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'pictures',
  storage,
}

const reducerPersist = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: reducerPersist,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

const persistor = persistStore(store)
export {store, persistor}
