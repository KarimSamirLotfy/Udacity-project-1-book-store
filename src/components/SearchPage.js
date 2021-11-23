import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import {search, update, getAll, get} from '../BooksAPI'
import Book from './Book'

const SearchPage = (props) => {
  const [querry, setQuerry] = useState("");
  const [books, setBooks] = useState([]);
  const [raw_books, setRaw_books] = useState({})


  const handelShelfChange = async(book_id, new_shelf)=>{
    console.log(`changing book with id ${book_id} to shelf ${new_shelf}`)
    await update({id:book_id}, new_shelf);
    books.forEach(book=>{if(book.id===book_id)book.shelf=new_shelf})// update the books array
    setBooks(books)
  }


  const handelChange = async (event)=>{
    const query = event.target.value
    setQuerry(query) // one source of truth
    let returned = await search(query) || [];
    // if(returned instanceof )
    if(typeof returned[Symbol.iterator] !== "function"){ // make sure it is not empty using iterator
      returned= [];
    }
    // get all books on shelf ans only add their values with others being none
    const shelf_books = await getAll()
    const id_shelf = {}
    shelf_books.forEach(book=>{
      id_shelf[book.id]=book.shelf
    })
    console.log(id_shelf)
    returned.map(book=>{
      const book_id = book.id
      const _shelf = id_shelf[book_id] || 'none' // if value is not found in object then it has to be none
      book['shelf'] = _shelf
      return 
    })
    setBooks(returned)
    // console.log(books)
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        />
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            placeholder="Search by title or author"
            name="querry"
            onChange={handelChange}
            value={querry}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => {
            // console.log(`book is ${JSON.stringify(book)}`);
            return (
              <li key={book.id}>
                <Book
                  handelShelfChange={(new_shelf) => {
                    handelShelfChange(book["id"], new_shelf);
                  }}
                  info={book}
                />
              </li>
            );
          })}
        </ol>
        {books.length === 0 && <h1>Use the search bar to show results</h1>}
      </div>
    </div>
  );
};

export default SearchPage;
