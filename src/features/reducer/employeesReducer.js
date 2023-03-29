import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employees: []
};

export const employeesSlice = createSlice({
    name: "employees",
    initialState: initialState,
    reducers: {
        addEmployees: (state, { payload }) => {
            state.employees = [];
            payload.forEach(elmt => {
                state.employees.push(elmt);
            });
        }
    }
});

export const { addEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;

