import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/kalviumLogo.png";
import registerImg from "../assets/register.png";
import offerLogo from "../assets/offerLogo.png";
import "../App.css";

function Book() {
  window.onload = function () {
    sessionStorage.clear();
  };

  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((err) => {
        console.log(`Error Found: ${err}`);
      });
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);

    axios
      .post(
        "https://reactnd-books-api.udacity.com/search",
        { query: value, maxResults: 30 },
        { headers: { Authorization: "whatever-you-want" } }
      )
      .then((res) => {
        setSearchBooks(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let filterList = searchValue !== "" ? searchBooks : books;
//   console.log(filterList);

  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src={logo} alt="" />{" "}
          <div>
            <h4>Kalvium</h4>
            <h3>Books</h3>
          </div>
        </div>
        <div>
          <input
            type="text"
            value={searchValue}
            placeholder={`Search Books`}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <i className="fa fa-search"></i>
        </div>
        <div>
          {sessionStorage.getItem("userName") ? (
            <p>
              Hello
              <span style={{ color: "red" }}>
                {sessionStorage.getItem("userName")}
              </span>
            </p>
          ) : (
            <Link to="/register">
              <img className="register-btn" src={registerImg} />
            </Link>
          )}
        </div>
      </div>
      <div className="banner">
        <h1>CHRISTMAS OFFER</h1>
        <img src={offerLogo} alt="offer" />
      </div>

      <div
        className="books-container"
        style={{ width: "100%", height: "100%" }}
      >
        {Array.isArray(filterList) &&
          filterList.map((book, index) => {
            return (
              <div key={index} className="books">
                {book.imageLinks && book.imageLinks.thumbnail && (
                  <img src={book.imageLinks.thumbnail} alt={book.title} />
                )}
                <p className="title">{book.title}</p>
                <div>
                  <span>{book.averageRating ? book.averageRating : "3"}</span>
                  <span>⭐</span>
                  <span>Free</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Book;
