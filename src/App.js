
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import  About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";




// here we are going to make components //

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert('Light mode has been enabled','success')

    }
  }
  return (
   // nav bar start--
   <>
   {/* <Router>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}  aboutText='About us'/>
      <Alert alert={alert} />
      
      <div className='my-3'>
      <Routes>
        <Route exact path="/about" element={<About/>} />
        
        <Route exact path="/" element={<TextForm/>} />

        
      </Routes>
      </div>
   </Router> */}

      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}  aboutText='About us'/>
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading='Enter the text to analyze below'/>
   </>
    
  );
}

export default App;
