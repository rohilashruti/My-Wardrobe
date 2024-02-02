import React from 'react'
import { useState } from 'react';
const Create = ({onCreate}) => {

    const[Item, setItem] = useState('');
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        onCreate(Item);
    }

    const handleChange = (event) =>
    {
        setItem(event.target.value);
    }
  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
        <label> Item Name :</label>
        <input className = 'input' value = {Item} onChange={handleChange}/>
        <button className='button' type='Submit'>Create Item</button>
      </form>
    </div>
  )
}

export default Create