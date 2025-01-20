import React, { useState} from 'react';
import { movies } from './MovieData.js';
import FilterComponent from './MovieList.js';
import "./MovieList.css";

export default function List() {
  const listItems = movies.map(movie =>
    <div key={movie.id}>
        Title: {movie.movie} - 
        Genre: {' ' + movie.genre + ' '} - 
        Release Year: {movie.releaseyear}
    </div>
  );

  return (
    <div>
      <h1 className="movielist">Movies</h1>
      <p>{listItems}</p>
    </div>
  );
}

