import React from 'react'
import axios from 'axios';
import  Home  from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './pages/events/events'
import  Contact  from './pages/contact/contact'
import  Gallery  from './pages/gallery/gallery'
import Ourdonors from './pages/ourdonors/ourdonors'
import Navbar from './components/navbar/navbar';
import Help from './pages/help/contact'
import DonationForm from './pages/donate/DonationForm'
import FoodDonation from './pages/FoodDonation/FoodDonation'
import AdminDashboard from './pages/AdminDashboard';
import UserHome from './pages/UserHome';
import AuthorHome from './pages/AuthorHome';

const API_URL = process.env.REACT_APP_API_URL;

const App = () => {

  const getData = async () => {
    try {
      const response = await axios.get(`${API_URL}/endpoint`);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/ourdonor' element={<Ourdonors />} />
        <Route path='/FoodDonation' element={<FoodDonation />} />
        <Route path='/DonationForm' element={<DonationForm />} />
        <Route path='/help' element={<Help />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/users' element={<UserHome />} />
        <Route path='/authors' element={<AuthorHome />} />
        
      </Routes>
   
      </Router>
    </>
  )
}

export default App;

