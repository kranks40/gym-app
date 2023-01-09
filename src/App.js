import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/pages/Home";
import ExerciseDetail from "./component/pages/ExerciseDetail";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box width="400px" sx={{ width: {xl: '1488px'}}} m='auto'>
      {/* Navbar */}
      <Navbar />

      {/* Route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
