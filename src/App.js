import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/cocktail/:id"
            element={<SingleCocktail />}
          ></Route>
          <Route exact path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
