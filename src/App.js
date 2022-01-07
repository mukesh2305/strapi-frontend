import './App.css';
import Header from "./components/Header/Header";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/header" element={<Header />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
