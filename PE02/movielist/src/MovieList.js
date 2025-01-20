// MovieList.js
import React, { useState} from 'react';

const FilterComponent = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      movie: 'The Wild Robot',
      genre: 'Family/Adventure',
      releaseyear: '2024'
    }, {
      id: 1,
      movie: 'Captain Underpants: The First Epic Movie',
      genre: 'Family/Comedy',
      releaseyear: '2017'
    }, {
      id: 2,
      movie: 'Barbie',
      genre: 'Comedy/Fantasy',
      releaseyear: '2023'
    }, {
      id: 3,
      movie: 'Knives Out',
      genre: 'Mystery/Thriller',
      releaseyear: '2019'
    }, {
      id: 4,
      movie: 'What We Do in the Shadows',
      genre: 'Comedy/Horror',
      releaseyear: '2014'
    }
  ]);

  const [filteredItems, setFilteredItems] = useState[items];

  const filterItems = (genre) => {
    const newFilteredItems = items.filter(item => item.genre === type);
    setFilteredItems(newFilteredItems);
  };

  return  (
    <div>
      <button onClick={() => filterItems('genre')}>Show Movies</button>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;