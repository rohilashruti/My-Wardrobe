import React from 'react'
import Show from './Show';
const List = ({Pieces, onDelete, onEdit}) => {
  
         const renderedItems = Pieces.map((Piece) =>
         {
             return <Show onEdit= {onEdit} onDelete={onDelete} key = {Piece.id} Piece = {Piece} />
         });
  return <div className='book-list'>{renderedItems}</div>

}

export default List