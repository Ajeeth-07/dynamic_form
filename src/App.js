import React from "react";
import Header from "./components/header";
import Template from "./components/Template";
import Body from "./components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formheader from "./components/Formheader";


function App() {
  return (
    <div className="app">
      <Router>
          <Routes>
          <Route path="/form">
            <Formheader/>
            </Route>
            <Route path="/">
            <Header />
            <Template />
            <Body />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
