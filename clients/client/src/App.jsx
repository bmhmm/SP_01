import{Routes, Route, useNavigate} from 'react-router-dom'
import { useEffect} from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'

function App() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  async function checkUser(){
    try {
      await axios.get('/users/check', {
        headers: {
          Authorization: 'Bearer' + token,
        },
      });
    } catch (error) {
      console.log(error.response);
      navigate('/login');
    }
  }
       
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App


// import React, { useEffect, useCallback } from 'react'; // Import useCallback
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import axios from 'axios';

// function App() {
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();

//   // Wrap checkUser in useCallback
//   const checkUser = useCallback(async () => {
//     try {
//       await axios.get('/users/check', {
//         headers: {
//           Authorization: 'Bearer ' + token, // Space after Bearer is good practice
//         },
//       });
//     } catch (error) {
//       console.log(error.response);
//       navigate('/login');
//     }
//   }, [token, navigate]); // checkUser depends on 'token' and 'navigate'

//   useEffect(() => {
//     checkUser();
//   }, [checkUser]); // Now include checkUser in the dependency array

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </>
//   );
// }

// export default App;