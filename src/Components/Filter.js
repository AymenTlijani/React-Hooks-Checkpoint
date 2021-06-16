import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Filter = ({filter, fiterRate}) => {

const callSearchFunction = e => {
    e.preventDefault();
    filter(e.target.value);
 
  }
  const callSearchRate = e => {
    fiterRate(e.target.value);
  }
  
  return (
      <form className="search">
        <input
          placeholder="cherche par titre..." onChange={callSearchFunction}
          type="text"
        />
        <input
          placeholder="cherche par rate..." onChange={callSearchRate}
          type="text"
        />
      </form>
    );
}

export default Filter;