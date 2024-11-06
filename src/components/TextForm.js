import React, { useState } from 'react'



export default function TextForm(props) {

    const [text, setText] = useState('');

    const handledOnChange = (event) => {
        console.log("on change" + text)
        setText(event.target.value)
    }
    const handleupclick = () => {
        console.log("uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showalert("converted to uppercase!","success")
    }
    const handleLowclick = () => {
        console.log("lowercase was clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showalert("converted to lowercase!","success")
    }
    const handleCopy = () => {
        
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showalert("text copied","success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("extra spaces removed","success")
        
    }
    
    let n = "here sweta"
    return (
        <>

            <div className='container' style={{color:props.mode==='dark'? 'white':'black'}}>
                <h1> {props.heading} {n}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handledOnChange} style={{backgrounColor:props.mode==='dark'? 'black':'white',color:props.mode==='dark'? 'grey':'black'}}></textarea>
                    </div>

                    <button disabled={text.length===0} className='btn btn-primary mx-2  my-2' onClick={handleupclick}>Covert To upper case</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-2  my-2' onClick={handleLowclick}>Covert To Lower case</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-2  my-2' onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-2  my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

                </div>
                <div className="container my-3" style={{color:props.mode==='dark'? 'white':'black'}}>
                    <h1>your text summary</h1>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} character</p>
                    <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0? text:"enter something in the text box"}</p>

                </div>
           </>
            )
}

