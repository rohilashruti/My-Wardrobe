import React, { useState } from 'react'
import Edit from './Edit';
const Show = ({Piece, onDelete, onEdit}) => {
 const[showEdit, setShowEdit] = useState(false);
  const handleDeleteClick =() =>
  {
    onDelete(Piece.id);
  }

  const handleEditClick =() =>
  {
    setShowEdit(!showEdit);
  }
 
  const handleSubmit = (id, newItem)=>
  {
    setShowEdit(false);
    onEdit(id, newItem)
  }
  let content = <h3>{Piece.Item}</h3>
  if(showEdit)
  {
    content = <Edit onSubmit = {handleSubmit}  Piece= {Piece}/>
  }
  return (
    <div className='book-show'>
    <div>{content}</div>
    <div className='actions'>
    <button className='edit' onClick = {handleEditClick}>
Edit
      </button>
      <button className='delete' onClick = {handleDeleteClick}>
Delete
      </button>
    </div>
    </div>
  )
}

export default Show