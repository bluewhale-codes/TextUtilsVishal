
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import  About from './components/About';
import { useState } from 'react';





// here we are going to make components //

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
    }
  }
  return (
   // nav bar start--
   <>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}  aboutText='About us'/>
    
    <div className='my-3'>
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div>
   </>
    
  );
}

export default App;
