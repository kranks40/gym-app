import { Route, Routes } from "react";
import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/pages/Home";
import ExerciseDetail from "./component/pages/ExerciseDetail";

function App() {
  return (
    <Box width="400px">
      {/* Navbar */}
      <Navbar />

      {/* Route */}
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Box>
  );
}

export default App;
