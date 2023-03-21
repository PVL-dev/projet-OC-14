import React from 'react';
import NewEmployeeForm from '../components/NewEmployeeForm/NewEmployeeForm';

const CreateEmployee = () => {
    return (
        <div className="main-container">
            <h2>Create Employee</h2>

            <NewEmployeeForm />

            <div className="modal-confirmation">Employee Created!</div>
        </div>
    );
};

export default CreateEmployee;

