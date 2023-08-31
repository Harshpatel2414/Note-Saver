import React from 'react'
import Note from './Note';

const Savednotes = ({ results }) => {
   
    return (
        <>
            <h3 className='title'>Added Notes</h3>
            {results.length<1?<div className='savedNotes'><h4 className='title'>You Dont have any Note. Create new Note...</h4></div>:<div className='savedNotes'>
                {results && results.map((data, index) => {
                    return <Note key={index} count ={index+1} {...data}/>
                })}
            </div>
            }
            
        </>
    )
}

export default Savednotes
