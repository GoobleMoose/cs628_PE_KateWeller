import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cities from './citiesList';
import AddCity from './addCities';
import City from './City';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar">
            <h1>Cities Application</h1>
            <ul>
              <li>
                <Link to="/cities">Cities List</Link>
              </li>
              <li>
                <Link to="/add">Add City</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route exact path="/cities" element={<Cities />}>
                <Route path="city" element={<City />} />
              </Route>
              <Route exact path="/add" element={<AddCity />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
