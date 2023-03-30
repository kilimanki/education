import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import teacherSlice from './teacher-slice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'teacher',
  storage,
};

export const persistedAuthReducer = persistReducer(persistConfig, teacherSlice);

const rootReducer = combineReducers({
  teacher: persistedAuthReducer,
});

export default rootReducer;
