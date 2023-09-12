import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CopyrightComp  from '../../components/pure/copyrightComp';


const DashBoardPage = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate('/login')
    }

    return (
        <div>
            <Button variant="contained" onClick={logout} >Logout</Button>
            <CopyrightComp></CopyrightComp>
        </div>
    );
}

export default DashBoardPage;
