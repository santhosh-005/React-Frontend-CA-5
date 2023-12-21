import React from "react";
import Book from "./components/Book";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/register" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
