import React from "react";
import Book from "./components/Book";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import BookInfo from "./components/BookInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/bookinfo" element={<BookInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
