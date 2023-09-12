import React from 'react';

//Material UI Components
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const CopyrightComp = () => {
    return (
        <Typography variant="body2" color="GrayText" align='center'>
        { 'Copyright ©' }
        <Link color='inherit' href='https://imagine.formacion.com'>
            Imagina Formación
        </Link>
        { ' ' }
        { new Date().getFullYear() }
        </Typography>
    );
}

export default CopyrightComp;
