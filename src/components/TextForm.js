import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Upper case was clicked");
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleOnchange = (event) =>{
        console.log("Upper case was clicked");
        setText(event.target.value);
    }
    const [text,setText]=useState();
  return (
    <div>
      
<div className="mb-3" >
    <h1> {props.heading }</h1>
  <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
    <button className='btn btn-primary' onClick={handleUpClick}>convert to uppercase</button>
    </div>
  )
}
