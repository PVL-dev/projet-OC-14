import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../features/reducer/employeesReducer.js';

export const store = configureStore({
	reducer: {
		counter: employeesReducer,
	}
});

