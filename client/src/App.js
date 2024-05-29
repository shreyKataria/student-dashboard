// import "./App.css";

// function App() {
//   return <div className="App">hello world</div>;
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Dashboard from "./components/Dashboard";
import StudentForm from "./components/StudentForm";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/add-student" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
