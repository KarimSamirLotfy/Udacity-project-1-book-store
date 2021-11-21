import React from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import { getAll, update } from "../BooksAPI";
import Book from "./Book";
class BookList extends React.Component {
  state = {
    books: [],
  };
  async componentDidMount() {
    const data = await getAll();
    this.setState({ books: data });
    console.log(this.state);
  }

  async handelShelfChange(book_id, new_shelf){
    console.log(`changing book with id ${book_id} to shelf ${new_shelf}`)
    await update({id:book_id}, new_shelf);
    this.state.books.forEach(book=>{if(book.id===book_id)book.shelf=new_shelf})// update the books array
    console.log("updated new state is " + this.state);
    
    this.setState({
        books: this.state.books
    })


  }

  render() {
    const { books } = this.state;
    return <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter((book) => book.shelf == "currentlyReading")
                    .map((book) => <li key={book["id"]}>
                        <Book handelShelfChange={(new_shelf) => {
                            console.log("from book");
                            this.handelShelfChange(book["id"], new_shelf);
                          }} info={book} />
                      </li>)}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter((book) => book.shelf == "wantToRead")
                    .map((book) => <li key={book["id"]}>
                        <Book handelShelfChange={(new_shelf) => {
                            console.log("from book");
                            this.handelShelfChange(book["id"], new_shelf);
                          }} info={book} />
                      </li>)}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter((book) => book.shelf == "read")
                    .map((book) => <li key={book["id"]}>
                        <Book handelShelfChange={(new_shelf) => {
                            console.log("from book");
                            this.handelShelfChange(book["id"], new_shelf);
                          }} info={book} />
                      </li>)}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>;
  }
}

export default BookList;
