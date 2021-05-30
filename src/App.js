import React from 'react'
import Home from "./Home";
import Navibar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Biography from './Biography';
import SocialActivities from './SocialActivities'
import Visuals from './Visuals'
import PhotoGallery from './PhotoGallery'
import Footer from './Footer';
import ServiceIntro from './ServiceIntro';
import Highlights from './Highlights';

function App() {
  return (
    <>

  <Router>
  <Navibar/> 
    <Switch>
      <Route path='/socialActivities'>
      <SocialActivities/>
      </Route>
      <Route path='/photoGallery'>
        <PhotoGallery/>
      </Route>
       <Route path='/visuals'>
         <Visuals/>
       </Route>
      <Route path='/biography'>
        <Biography/>
      </Route>
      <Route path='/'>
         
         <Home/>
         
         <ServiceIntro />
       
      </Route>
    </Switch>
  </Router>
    
    </>


 
 


  


 
   
  );
}

export default App;
