import { React, useEffect, useState } from 'react'
import Savednotes from './Savednotes';
import { addDoc, onSnapshot, } from 'firebase/firestore';
import {colRef } from './Database.js';

const Addnotes = (props) => {
    let date = new Date();
    let [results, setResults] = useState([])
   
    useEffect(() => {
        onSnapshot(colRef, (d) => {
            let data = [];
            d.docs.forEach((doc) => {
                data.push({ ...doc.data(), id: doc.id })
            });
            setResults(data)
        });
        // eslint-disable-next-line
    }, [])
    console.log(results);

    let addFormdata = document.getElementsByClassName('formInput')
    // let btn = document.getElementsByClassName('btn')
    let addNote = (e) => {
        e.preventDefault()
        addDoc(colRef, {
            title: addFormdata.title.value,
            description: addFormdata.description.value,
            time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }).then(() => {
            addFormdata.title.value = '';
            addFormdata.description.value = '';
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <>
            <h3 className='title'>Add Note here</h3>
            <div id="sendnote" className='addNote'>
                <form className="addform" onSubmit={addNote}>
                    <label >Title</label>
                    <input type="text" name='title' className="formInput" placeholder="Enter title" required />
                    <label >Description</label>
                    <textarea rows='3' type='text' name='description' className="formInput"  placeholder="Enter text here..." required></textarea>
                    <button className='btn'>Add Note</button>
                </form>
            </div>
            <Savednotes results={results} />
        </>
    )
}

export default Addnotes