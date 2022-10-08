import React from "react";
import ListItems from "./ListItems";
import CreateItem from "./CreateItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ListItems />} />
        <Route path="/create" element={<CreateItem />} />
      </Routes>
    </Router>
  );
};

export default App;
