import React, {useState} from "react";
import Shelf from "./example";
const loading_image =
  "https://www.flaticon.com/free-icon/loading_190420?term=loading&page=1&position=13&page=1&position=13&related_id=190420&origin=search";

function Book(props) {
  // extract data

  const {
    title,
    subtitle,
    shelf = 'None',
    previewLink,
    imageLinks = { thumbnail: loading_image },
    authors = [],
    categories,
    id,
  } = props.info || {};
   const { handelShelfChange } = props || {};
//  const { handelShelfChange } = {handelShelfChange: (a)=>{console.log('i am passed')}}
  return <div>
      {console.log(title, subtitle, shelf, previewLink, imageLinks["thumbnail"], authors, categories, id, handelShelfChange)}
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks["thumbnail"]}")` }} />
          <div className="book-shelf-changer">
            {/* <Shelf /> */}
            <Shelf name="here" handelShelfChange={handelShelfChange} />
          </div>
        </div>
        <div className="book-title">{title}</div>
        {/* write all the authors */}
        {authors.map((author) => <div key={author} className="book-authors">
            {author}
          </div>)}
      </div>
    </div>;
}

{
}
export default Book;
