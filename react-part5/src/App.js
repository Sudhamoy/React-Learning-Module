import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import NotFound from './components/NotFound.jsx';

import {BroswerRouter , Routes, Route, BrowserRouter} from 'react-router-dom' //three main HOC of rrd

function App() {
  return (

    <BrowserRouter>
      
      <div className="App">
        <Navbar/> {/* out of routes bcz want to show navba for all pages */}

        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='*' element={<NotFound/>}/>  
        </Routes>
        
      </div>
      
    </BrowserRouter>
    //BrowserRouter have the access of url-location/website location, which ends up with routing through the sections of a website without any refresh of page or refreshing of whole DOM.(just alter the parts needs to get changed in DOM)
    
  );
}

export default App;


/* 
- Route root : '/'
- For component that is not present , use : '*' or '/*'
 */
