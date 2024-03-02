import React, { useState } from 'react';

interface StudentFormData {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    // Agrega más campos según sea necesario
}

const StudentRegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<StudentFormData>({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        // Inicializa más campos según sea necesario
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos al backend
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="Nombre"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
            />
            <button type="submit">Registrar</button>
        </form>
    );
};

export default StudentRegistrationForm;
