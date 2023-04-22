import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './birthchart/birthchartSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})