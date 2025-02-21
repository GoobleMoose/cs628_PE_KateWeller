import React, { useState} from 'react';


function AddCity (){
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [population, setPopulation] = useState ('');

    function handleCityChange(e) {
        setCity(e.target.value);
    }

    function handleCountryChange(e) {
        setCountry(e.target.value);
    }

    function handlePopulationChange(e) {
        setPopulation(e.target.value);
    }

    return (
    <div>
        <h2>Add City</h2>
        <label>
            City: {' '}
            <input
                value={city}
                onChange={handleCityChange}
            />
        </label>
        <br />
        <label>
            Country: {' '}
            <input
                value={country}
                onChange={handleCountryChange}
            />
        </label>
        <br />
        <label>
            Population: {' '}
            <input
                value={population}
                onChange={handlePopulationChange}
            />
        </label>
        <br />
        <button className='blue_button'>Add City</button>
        <p>
            City: <b>{city}</b>
            <br />
            Country: <b>{country}</b>
            <br />
            Population: <b>{population}</b>
            </p>
    </div>
    );
}

export default AddCity;