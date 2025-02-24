import React, { useState } from 'react';

const AddButton = () => {
    const [formData, setFormData] = useState({
        city: '',
        country: '',
        population: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        return(
            <div>
                City: {formData.city} <br />
                Country: {formData.country} <br />
                Population: {formData.population}
            </div>
            );
    };

    return (
        <div>
            <label>
                City: {' '}
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />                    
            </label>
            <br />
            <label>
                Country: {' '}
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Population: {' '}
                <input
                    type="text"
                    name="population"
                    value={formData.population}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button className="blue_button" onClick={handleSubmit}>
                Add City
            </button>
        </div>
    );
};

export default AddButton;