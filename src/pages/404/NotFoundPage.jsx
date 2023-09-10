import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

  const navigate = useNavigate();
  const navTo = (path) => {
    //history.push(path);
    navigate(path);
  }
  const goBack = () => {
        //history.goBack();
        navigate(-1);
    }

  return (
    <div>
        <h1>404 - Page Not Found</h1>
        <button onClick={goBack}>
          Go Back
        </button>
        <button onClick={() => navTo('/')}>
          Go Home
        </button>
    </div>
  );
}

export default NotFoundPage;