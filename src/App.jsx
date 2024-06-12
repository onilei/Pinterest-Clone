import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import Home from './pages/Home';
// import Gallery from './pages/Gallery';
import First from './pages/First';
import Welcomepage from './pages/Welcomepage';
import Logout from './pages/Logout';
import MainSoup from './pages/MainSoup';
import Ideas from './pages/Ideas';
import Cars from './pages/Cars';
import Pasta from './pages/Pasta';
import Flowers from './pages/Flowers';
import Instrument from './pages/Instrument';

function App(){
  

  return(
    
    <Router>
      <Routes>
        <Route path="/" element={<Welcomepage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/First" element={<First/>}/>
        <Route path="/Ideas" element={<Ideas/>}/>
        <Route path="/Soup" element={<MainSoup/>}/>
        <Route path="/logout" element={<Logout/>}/>

<Route path="/Cars" element={<Cars/>}/> 
<Route path="/Pasta" element={<Pasta/>}/>
<Route path="/Flowers" element={<Flowers/>}/>
<Route path="/Instrument" element={<Instrument/>}/>
      
        
        {/*<Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
    </Router>
  )
}

export default App;