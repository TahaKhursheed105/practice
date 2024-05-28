import logo from './logo.svg';
import './App.css';
import Prenav from './Components/PreNav/Prenav';
import NavbarB from './Components/Navbar/NavbarB';
import Hero from './Components/HeroSection/Hero';
import MainSection from './Components/MainSection/Main';
import Service from './Components/Service/Service';
import Testimonial from './Components/Testimonial/Testimonial';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
// AboutSection
import AboutHero from './Components/AboutHero/AboutHero';
import AboutMain from './Components/AboutMain/AboutMain';
import AboutFAQ from './Components/AboutFAQ/AboutFAQ';
// ServiceSection
import ServiceSection from './Components/ServiceSection/ServiceSection';
import ServiceSectionMain from './Components/ServiceSectionMain/ServiceSectionMain';
import ServiceContent from './Components/ServiceContent/ServiceContent';

// ContactUs

import ContactUs from './Components/ContactUs/ContactUs';
import ContactMain from './Components/ContactMain/ContactMain';
import ContactUsFAQ from './Components/ContactUsFAQ/ContactUsFAQ';



import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
        <div> 
          
          <Prenav />
      
      <NavbarB />

     <Hero/>

     <MainSection />

     <Service />

     <Testimonial />

     <Subscribe />

     <Footer /></div>} />
      </Routes>
     
     {/* about */}
     <Routes>
      <Route path='/about' element={
      <div>
        <Prenav />
      
      <NavbarB />
      
      <AboutHero />

<AboutMain />
<Testimonial />
<AboutFAQ />  

<Subscribe />

<Footer />

</div>}/>
</Routes>

<Routes>
  <Route path='/service' element={
  
  <div> 
        <Prenav />
      
        <NavbarB />

        <ServiceSection />

        <ServiceSectionMain />

        <ServiceContent />




        <Subscribe />

        <Footer />
       </div>} />
</Routes>

<Routes>
  <Route path='/contact-us' element={
  
  <div>
  <Prenav />
      
      <NavbarB />

      <ContactUs />

      <ContactMain />

      <ContactUsFAQ />











      <Subscribe />

<Footer />
  </div>} />
</Routes>
    

     


    </div>
  

  );
}

export default App;
