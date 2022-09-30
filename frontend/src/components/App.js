import React from "react";
import ListItems from "./ListItems";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ListItems />} />
      </Routes>
    </Router>
  );
};

export default App;
