import React from "react";
import { useLocation,Link } from "react-router-dom";
import noImage from "../assets/no-image.jpg";
import '../App.css'

function BookInfo() {
  const location = useLocation();
  const book = location.state;
  // console.log(book);

  return (
    <div  className="book-info">
      <img
        src={
          book.imageLinks && book.imageLinks.thumbnail
            ? book.imageLinks.thumbnail
            : noImage
        }
        alt="No-Image"
      />
      <div>
        <div>
        <h1 style={{color:'red',margin:'30px',lineHeight:'40px'}}>{book.title}</h1>
        <h4>Average Rating: {book.averageRating ? book.averageRating : "3"}</h4>
        <h5>Page Count: {book.pageCount ? book.pageCount : null}</h5>
        <h5>Published date: {book.publishedDate ? book.publishedDate : null}</h5>
        <p><b>Discription: </b>{book.description}</p>
        </div>
        <Link to='/'><button>Back To Home</button></Link>
        </div>
    </div>
  );
}

export default BookInfo;
