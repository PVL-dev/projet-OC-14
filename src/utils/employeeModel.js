export const employeeModel = (data) => {
    return {
		firstName: data.firstName,
		lastName: data.lastName,
		birthDate: data.birthDate,
		startDate: data.startDate,
		street: data.street,
		city: data.city,
		state: data.state,
		zipCode: data['zip-code'],
		department: data.department
    };
};

