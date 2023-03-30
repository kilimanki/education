import { createSlice } from '@reduxjs/toolkit';

const teacherSlice = createSlice({
  name: 'teacher',
  initialState: {
    math: [],
  },
  reducers: {
    getName(state, { payload }) {
      state.math.push({ name: payload });
    },
    getSubject(state, { payload }) {
      state.math.push({ subject: payload });
    },
    getAll(state, { payload }) {
      state.math.push({ name: payload });
    },
    getDate(state, { payload }) {
      state.math.push({ date: payload });
    },
    getType(state, { payload }) {
      state.math.push({ type: payload });
    },

    getCount(state, { payload }) {
      state.math.push({ count: payload });
    },
    getPrice(state, { payload }) {
      state.math.push({ price: payload });
    },
    getId(state, { payload }) {
      state.math.push({ id: payload });
    },
  },
});

export const {
  getName,
  getDate,
  getAll,
  getType,
  getCount,
  getPrice,
  getSubject,
  getId,
} = teacherSlice.actions;
export default teacherSlice.reducer;
