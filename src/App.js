import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MenuPricing from './Pages/MenuPricing';
import ContactUs from './Pages/ContactUs';
import OpeningHours from './Pages/OpeningHours';
import Header from './components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';


function Here() {
  return (
    <div>
     <Home />
    </div>
  );
}
  function App (){
    return (
      <Router>
      <div>
      <Header />
      
        <Routes>
         <Route exact path="/aboutus" element={<AboutUs />} />
         <Route exact path="/home" element={<Home />} />
          <Route exact path="/openinghours" element={<OpeningHours />} />
          <Route exact path="/menupricing" element={<MenuPricing />} />
          <Route exact path="/contactus" element={<ContactUs />} />
        
        </Routes>

      </div>
    </Router>
  );
};

export default App;
