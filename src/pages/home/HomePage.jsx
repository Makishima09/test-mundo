import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const HomePage = () => {

  const location = useLocation();
  //const history = useHistory();
  const navigate = useNavigate();
  console.log('We are in Route:', location.pathname) // '/about | /faqs'

  const navTo = (path) => {
      //history.push(path);
      navigate(path);
  }
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={() => navTo('/profile')}>
          Go to Profile
        </button>

        <h2>Dashboard</h2>
    </div>
  )
}

export default HomePage