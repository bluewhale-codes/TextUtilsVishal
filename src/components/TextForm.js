import React , {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Change to Upper Case','success')
    
  }
  const handlelowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Change to Lower Case','success')

    
  }
  const handleCopy = ()=>{
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied to Clickboard','success')

  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra space is removed','success')
  }

   const handleOnChange = (e)=>{

      setText(e.target.value)
   
   }


  const [text , setText] = useState('Enter text here');
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}} className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">          
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
        </div>
        
        <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Upper case</button>
        <button type="button" onClick={handlelowClick} className="btn btn-primary mx-2">Convert to Lower case</button>
        <button type="button" onClick={handleCopy} className="btn btn-primary mx-2">Copy</button>
        <button type='button' className='btn btn-success mx-2' onClick={handleExtraSpaces}>Remove Extra space</button>
    </div>
   

    <div style={{color:props.mode==='dark'?'white':'black'}} className="container my-3">
       <h1>Your text summery</h1>
       <p>
         {text.split(" ").length} Words <br />
         {text.length} Characters <br />
         { 0.008 * text.split(" ").length} Minutes read
       </p>
       <p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something to preview it here'}</p>
       </p>
    </div>
    </>
  )
}
