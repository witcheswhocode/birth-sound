import { createSlice } from '@reduxjs/toolkit';
import { Birthchart } from '../../BirthchartClass';
import { rihannaChart } from '../../data/settings';

export const birthchartSlice = createSlice({
  name: 'counter',
  initialState: {
    value: new Birthchart(rihannaChart),
  },
  reducers: {
    increment: (state,payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('reducer');
      console.log(payload);
      const p = payload.payload;

      state.value = new Birthchart(p.chart,p.width,p.height,p.context);
    },
    decrement: (state,payload) => {
      state.value['asc'] = payload.newAsc;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = birthchartSlice.actions

export default birthchartSlice.reducer