import React, { useState } from 'react'

const Edit = ({Piece,  onSubmit}) => {

  const[Item, setItem] = useState(Piece.Item);

  const handleChange = (event)=>
  {
    setItem(event.target.value);
  }

  const handleSubmit = (event) =>
  {
    event.preventDefault();
    
    onSubmit(Piece.id, Item);
  }
  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Item Name</label>
      <input className='input' value= {Item} onChange= {handleChange}/>
      <button className='button is-primary'>
        Save
      </button>
    </form>
  )
}

export default Edit