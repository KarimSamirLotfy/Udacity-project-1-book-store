import React from "react";
// import {Route, Switch } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookList from "./components/BookList";
import SearchPage from "./components/SearchPage";
import { BrowserRouter, Route, Link, Routes, Router, Layout } from "react-router-dom";
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  render() {
    return <div className="app">
            <Routes>
              <Route path="/" element={<BookList/>} exact/>
              <Route path="/search" element={<SearchPage/>} />
            </Routes>

        {/* {this.state.showSearchPage ? <SearchPage /> : <BookList />} */}
      </div>;
  }
}

export default BooksApp;
