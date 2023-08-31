import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { db } from './Database';

const Note = (props) => {
  let { count, title, description, time, id} = props;
  const deleteNote = (id) =>{
    console.log(id)
      deleteDoc(doc(db,'notes', id))
  }
  return (
    <>
      <div className='noteItem'>
        <div className="srnb">{count}</div>
        <div className='notes'>
          <div className="notehead">
            <div className="title" id='noteTitle'>{title}</div>
            <div className="date-time"><span>{time}</span></div>
          </div>
          <p className='notepara' id='noteDsc'>{description}</p>
        </div>
        <div className="delete">
          <i className="fa-solid fa-trash" onClick={()=>deleteNote(id)}></i>
        </div>
      </div>
    </>
  )
}

export default Note;
