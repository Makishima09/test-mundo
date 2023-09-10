import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {

    const navigate = useNavigate();

    const goBack = () => {
        //history.goBack();
        navigate(-1);
    }

    const navTo = (path) => {
        navigate(path);
    }

  return (
    <div>
        <h1>Your Profile</h1>
        <button onClick={() => navTo('/tasks')} >Tasks</button>
        <button onClick={goBack}>
            Go Back
        </button>
    </div>
  )
}

export default ProfilePage