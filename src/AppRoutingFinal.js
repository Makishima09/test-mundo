import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Button } from '@mui/material/Button';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';

function AppRoutingFinal() {
  //TODO Change to value from sessionStorage
  let loggedIn = true;

  return (
    <Router>
      <Routes>
      {/* Redirections to protect our routes */}
        <Route path='/' element=
        {
            loggedIn ? 
            <Navigate from='/' to='/dashboard'/>
            :
            <Navigate from='/' to='/login'/>
          }
        />

      {/* Login Route */}
      <Route path='/login' element={<LoginPage/>} />
      {/* Dashboard Route */}
      <Route path='/dashboard' element={
        loggedIn ? 
            <DashBoardPage/>
            :
            <Navigate from='/' to='/login'/>
        } />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes> 
    </Router>
    
  );
}

export default AppRoutingFinal;
