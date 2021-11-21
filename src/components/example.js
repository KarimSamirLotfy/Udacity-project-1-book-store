import React, { useState } from 'react';

function Shelf(props) {
  // Declare a new state variable, which we'll call "count"
  const [shelf, setShelf] = useState('None');
  const { handelShelfChange } = props;
    function handleSelectChange(shelf) {
      console.log("state is changeing ");
      setShelf(shelf);
      //console.log(`handerSehlfChange is a ${props.handelShelfChange}`);
      handelShelfChange(shelf)
    }
  return <div>
      <select value={shelf} onChange={(event)=>{
          console.log('shelf changed'+ event.target.value)
          handleSelectChange(event.target.value);
          setShelf(event.target.value)
      }}>
        <option name="shelf">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>;
}

export default Shelf;