import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';


// here we are going to make components //

function App() {
  return (
   
   // nav bar start--
   <>
    <Navbar title='TextUtils'  aboutText='About us'/>
    <div className='my-3'>
    <TextForm heading="Enter the text to analyze"/>
    </div>
   </>
    
  );
}

export default App;
