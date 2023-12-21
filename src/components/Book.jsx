import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/kalviumLogo.png';
import registerImg from '../assets/register.png';
import offerLogo from '../assets/offerLogo.png'
import '../App.css';

function Book() {

const [books,setBooks]=useState([])
const [search,setSearch]=useState("")

useEffect(()=>{
  axios.get("https://reactnd-books-api.udacity.com/books",{headers:{ 'Authorization': 'whatever-you-want'}})
  .then((res)=>{setBooks(res.data.books)})
  .catch((err)=>{console.log(`Error Found: ${err}`)})
},[])


const filterList = books.filter((ele)=>ele.title.toLowerCase().includes(search.toLocaleLowerCase())) 


  return (
    <div>
        <div className="nav-bar">
            <div className="logo">
                <img src={logo} alt="" />
                <div>
                    <h4>Kalvium</h4>
                    <h3>Books</h3>
                </div>
            </div>
            <div>
                <input type="text" value={search} placeholder={`Search Books`}  onChange={(e)=>setSearch(e.target.value)}/>
                <i class="fa fa-search"></i>
            </div>
            <div>
               <Link to='/register'><img className='register-btn' src={registerImg} /></Link>
            </div>
        </div>
        <div className="banner">
            <h1>CHRISTMAS OFFER</h1>
            <img src={offerLogo} alt="offer" />
        </div>
        <div className="books-container" style={{width:'100%',height:'100%'}}>
            {filterList.map((book,index)=>{
                return( 
                    <div key={index} className='books'>
                        <img src={book.imageLinks.thumbnail} alt={book.title} />
                        <p className='title'>{book.title}</p>
                        <div>
                          <span>{book.averageRating ? book.averageRating : "3" }</span>
                          <span>⭐</span>
                          <span>Free</span>
                        </div>
                    </div>
                    )
                }
            )}

        </div>
        

    </div>
  )
}

export default Book
