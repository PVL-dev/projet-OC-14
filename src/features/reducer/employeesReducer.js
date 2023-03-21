import { createSlice } from '@reduxjs/toolkit';
import { employeeModel } from '../../utils/employeeModel.js';

const initialState = {
    employees: [],
};

export const employeesSlice = createSlice({
    name: "employees",
    initialState: initialState,
    reducers: {
        addEmployee: (state, { payload }) => {
            state.employees.push(employeeModel(payload));
        }
    }
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;

