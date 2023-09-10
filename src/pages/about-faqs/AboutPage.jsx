import React from 'react'
import { useLocation, useHistory, useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const location = useLocation();
    //const history = useHistory();
    const navigate = useNavigate();
    console.log('We are in Route:', location.pathname) // '/about | /faqs'

    const navTo = (path) => {
        //history.push(path);
        navigate(path);
    }
    const goBack = () => {
        //history.goBack();
        navigate(-1);
    }

    const goForward = () => {
        navigate(1);
    }

  return (
    <div>
        <h1>
            About | FAQs
        </h1>
        <div>
            <button onClick={() => navTo("/")}>
                Go to Home
            </button>
            <button onClick={ goBack }>
                Go back
            </button>
            <button onClick={ goForward }>
                Go Forward
            </button>
        </div>
    </div>
  )
}

export default AboutPage