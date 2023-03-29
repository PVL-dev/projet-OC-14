import React, { useState, useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { employeesListSelector } from '../../utils/selectors.js';
import { manageDatas } from '../../utils/manageDatas.js'
import Select from 'react-select';
import statesDatas from '../../assets/datas/states.js';
import departmentsDatas from '../../assets/datas/departments.js';
import { addEmployees } from '../../features/reducer/employeesReducer.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'pvl-react-modal';

const NewEmployeeForm = () => {
    const dispatch = useDispatch();
    const storedEmployees = useSelector(employeesListSelector);

    const form = useRef(null);

    const [birthDate, setBirthDate] = useState(new Date("2000.01.01"));
    const [startDate, setStartDate] = useState(new Date());
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
        const employeesList = manageDatas(datas, storedEmployees);

        dispatch(addEmployees(employeesList));
        resetForm(e);
        setOpenModal(true);
    };

    const [openModal, setOpenModal] = useState(false);
    const closeModal = () => {
        if (openModal) {
            setOpenModal(false);
        };
    };
    const modalStyle = { // Style settings for Modal
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        modalColor: "white",
        modalWidth: "40%"
    };

    return (
        <Fragment>
            <div className="form-background">
                <form id="new-employee-form" ref={form} onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="first-name">First Name</label>
                    <input name="firstName" type="text" id="first-name" required autoFocus />

                    <label htmlFor="last-name">Last Name</label>
                    <input name="lastName" type="text" id="last-name" required />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker
                        id="date-of-birth"
                        name="birthDate"
                        selected={birthDate}
                        onChange={(date) => setBirthDate(date)}
                        required
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker
                        id="start-date"
                        name="startDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        required
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input name="street" id="street" type="text" required />

                        <label htmlFor="city">City</label>
                        <input name="city" id="city" type="text" required />

                        <label htmlFor="state">State</label>
                        <Select
                            id="states"
                            name="state"
                            value={selectedState}
                            defaultValue={selectedState}
                            onChange={setSelectedState}
                            options={statesDatas}
                        />

                        <label htmlFor="zipCode">Zip Code</label>
                        <input name="zipCode" id="zipCode" type="number" required />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <Select
                        id="department"
                        name="department"
                        value={selectedDepartment}
                        defaultValue={selectedDepartment}
                        onChange={setSelectedDepartment}
                        options={departmentsDatas}
                    />

                    <button type="submit">Save</button>
                </form>
            </div>

            <Modal open={openModal} close={closeModal} customStyle={modalStyle}>
                <h3>New employee successfully added !</h3>
                <Link className="nav__link" to="/employees">
                    <p>View Employees list</p>
                </Link>
            </Modal>
        </Fragment>
    );
};

export default NewEmployeeForm;

