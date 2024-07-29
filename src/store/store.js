import { configureStore } from '@reduxjs/toolkit'
import todolistSlice from '../reducers/todolist/todolistSlice'

export const store = configureStore({
  reducer: {
    todos:todolistSlice
  },
})