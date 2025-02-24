import React from 'react';
import AddButton from './addButton';


function AddCity (){

      function handleAddCity(formData) {
        return(
            <div>
                City: {formData.city} <br />
                Country: {formData.country} <br />
                Population: {formData.population}
            </div>
            );
      }

    return (
    <div className='section'>
        <h2>Add City</h2>
        <br />
        <AddButton 
            onAddCity={handleAddCity}
        />
    </div>
    );
}

export default AddCity;