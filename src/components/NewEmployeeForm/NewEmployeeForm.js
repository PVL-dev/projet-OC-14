import React, { useState, useRef } from 'react';
import { /*useStore, */useDispatch } from 'react-redux';
import statesDatas from '../../assets/datas/states.js';
import departmentsDatas from '../../assets/datas/departments.js';
import { addEmployee } from '../../features/reducer/employeesReducer.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
//import { ReactModal } from 'react-modal-PVL';

const NewEmployeeForm = () => {
    //const store = useStore();
    const dispatch = useDispatch();

    const form = useRef(null);
    //const [modalState, setModalState] = useState(false);

    const [birthDate, setBirthDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [selectedState, setSelectedState] = useState(statesDatas[0]);
    const [selectedDepartment, setSelectedDepartment] = useState(departmentsDatas[0]);

    const resetForm = (e) => {
        setBirthDate(null);
        setStartDate(null);
        setSelectedState(statesDatas[0]);
        setSelectedDepartment(departmentsDatas[0]);

        e.target.reset();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const rawDatas = new FormData(form.current);
        const datas = Object.fromEntries(rawDatas);

        console.log(datas)
        dispatch(addEmployee(datas));
        resetForm(e);
        //setModalState(true);

        //localStorage.setItem('reduxState', JSON.stringify(store.getState().counter));
    };

    return (
        <div className="form-background">
            <form id="new-employee-form" ref={form} onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="first-name">First Name</label>
                <input name="firstName" type="text" id="first-name" required />

                <label htmlFor="last-name">Last Name</label>
                <input name="lastName" type="text" id="last-name" required />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker
                    required
                    selected={birthDate}
                    onChange={(date) => setBirthDate(date)}
                    name="birthDate"
                    id="date-of-birth"
                />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker
                    required
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    name="startDate"
                    id="start-date"
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input name="street" id="street" type="text" required />

                    <label htmlFor="city">City</label>
                    <input name="city" id="city" type="text" required />

                    <label htmlFor="state">State</label>
                    <Select
                        value={selectedState}
                        defaultValue={selectedState}
                        onChange={setSelectedState}
                        options={statesDatas}
                        id="states"
                        name="state"
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input name="zip-code" id="zip-code" type="number" required />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select
                    name="department"
                    value={selectedDepartment}
                    defaultValue={selectedDepartment}
                    onChange={setSelectedDepartment}
                    options={departmentsDatas}
                    id="department"
                />

                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default NewEmployeeForm;

