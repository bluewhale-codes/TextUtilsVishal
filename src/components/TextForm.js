import React , {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    
  }

   const handleOnChange = (e)=>{

      setText(e.target.value)
   
   }


  const [text , setText] = useState('Enter text here');
  return (
    
    <form className='container my-3'>
        <h1>{props.heading}--{text}</h1>
        <div className="mb-3">          
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        
        <button type="button" onClick={handleUpClick} className="btn btn-primary">Convert to Upper case</button>
    </form>
  )
}
