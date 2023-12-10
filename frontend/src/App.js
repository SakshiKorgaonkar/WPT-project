import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './components/Navigationbar';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import RegistrationForm from "./components/RegistrationForm";
import { faS } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './components/LoginForm';
import Bookings from './components/Bookings';
import NewBooking from './components/NewBooking';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
library.add(faS,faLinkedin,faUser)
function App() {

  const [isAuthenticated,setIsAuthenticated] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('token') !== null){
      setIsAuthenticated(true);
      console.log("User is logged in");
    }
  },[])

  return (
    <BrowserRouter>
    <Navigationbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}></Navigationbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/register' element={<RegistrationForm/>}></Route>
        <Route path='/login' element={<LoginForm setIsAuthenticated={setIsAuthenticated}/>}></Route>
        <Route path='/bookings' element={<Bookings isAuthenticated={isAuthenticated}/>}></Route>
        <Route path='/new-booking' element={<NewBooking isAuthenticated={isAuthenticated}/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
