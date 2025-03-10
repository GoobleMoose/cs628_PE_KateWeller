import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import RecipeList from "./components/recipeList";
import Edit from "./components/edit";
import Create from "./components/create";

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<RecipeList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
  );
};

export default App;