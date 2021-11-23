import React, { useState } from "react";

function Shelf(props) {
  // Declare a new state variable, which we'll call "count"
    const { handelShelfChange } = props;
    const { current_shelf } = props;
  // state of the shelf
  const [shelf, setShelf] = useState(current_shelf);

  function handleSelectChange(shelf) {
    setShelf(shelf);
    //console.log(`handerSehlfChange is a ${props.handelShelfChange}`);
    handelShelfChange(shelf);
  }
  return (
    <div>
      <select
        value={shelf}
        onChange={(event) => {
          console.log("shelf changed" + event.target.value);
          handleSelectChange(event.target.value);
          setShelf(event.target.value);
        }}
      >
        <option name="shelf">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default Shelf;
