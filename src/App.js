import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
          </Routes>
    </BrowserRouter>
  );
};
export default App;
