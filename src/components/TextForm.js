import React,{useState} from 'react'


export default function TextForm(props) {
    

    const handleUpClick=()=>{
        console.log("Uppercase is clicked");
       // setText("SET TEXT clicked on handleUpClick")
        setText(text.toUpperCase())
    }

    const handleLowClick=(event)=>{
        setText(text.toLowerCase());

    }

    const handleClrClick=()=>{
       const newText="";
        setText(newText)
    }

    const handleCopy=()=>{
      let text =document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    

    const handleOnChange=(event)=>{
        //console.log("onchange");
        setText(event.target.value);
    }

   
    const [text, setText] = useState("");


  return (
    <>
  <div className="container  my-3" style={{color:props.mode==='dark'?'white':'black'}}>    
   <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows={8}
            style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black',border:'2px solid blue'}}
            //style={{ border:'2px solid blue'}}
            
        />
    </div>

            <div className="container " >
            <button className='btn btn-primary mx-3' onClick={handleUpClick}>convert to uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLowClick}>convert to lowerrcase</button>
            <button className='btn btn-primary mx-3' onClick={handleClrClick}>cleare Text</button>
            <button className='btn btn-primary mx-3' onClick={handleCopy}>copy Text</button>
            <button className='btn btn-primary mx-3' onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>   
  </div>  

  <div className="container my-2 " style={{color:props.mode==='dark'?'white':'#031d37'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
    <p><b>{0.008 * text.split(" ").length} Minutes to read</b></p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
  
</>
  )
}