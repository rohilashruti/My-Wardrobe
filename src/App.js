import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Create from './Components/Create';
import List from './Components/List';
function App() {

 
  const[Pieces, setPieces] = useState([]);
 const editById = (id, newItem) =>
 {
   const updatedArray = Pieces.map((Piece)=>
   {
    if(Piece.id === id ){
      return {...Piece, Item: newItem};
    }
    return Piece;
   });
   setPieces(updatedArray);
 };
  const deleteById = (id) =>
  {
    const updatedArray = Pieces.filter(
      (Piece) => {
        return Piece.id !== id;
      }
    );
    setPieces(updatedArray);
  }
  const createNew = (Item) =>
  {
  const updatedArray = [...Pieces, {id: Math.round(Math.random()* 9999), Item}];  //generating random id for the item
  setPieces(updatedArray);
  }
  return (
    <div className='app'>
      <h1>MY WARDROBE</h1>
      
      <List Pieces={Pieces} onEdit= {editById} onDelete = {deleteById}/>
      <Create onCreate = {createNew}/>
       
    </div>
  );
}

export default App;
