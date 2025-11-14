import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import storageReducer from './storageSlice'



export const store = configureStore({
  reducer: {
    product: productReducer,
    storage: storageReducer,
  },
})