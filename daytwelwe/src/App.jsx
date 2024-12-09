import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Dasboard from './Components/Dasboard';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Register from './Components/Register';

function App() {


  return (
    <div>
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
    </Route>
  </Routes>
</BrowserRouter>
    </div>
  )
}

export default App
