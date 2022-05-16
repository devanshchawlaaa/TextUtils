import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');
    const handleclick=()=>{
       const newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to Uppercase","success");
    }
    const handlechange=(event)=>{
        setText(event.target.value)
    }
    const handlelowclick=()=>{
        const newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleclearclick=()=>{
        const newText='';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handlecopyclick=()=>{
        let textt=document.getElementById('myBox');
        textt.select();
        navigator.clipboard.writeText(textt.value);
        props.showAlert("Text copied to clipboard","success");
    }
    const handleextraspace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    // setText("uiui");
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>   
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" onChange={handlechange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleclick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handlecopyclick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleextraspace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>{text.split(/[ ]+/).join(" ").trim().split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/[ ]+/).join(" ").trim().split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
        </div>
        </>
    )
}
