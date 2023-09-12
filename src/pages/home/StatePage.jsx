import React from 'react';
import { useLocation } from 'react-router-dom'

const StatePage = () => {
    const {state, search} = useLocation(); //Forma más sencilla v2
    // const location = useLocation();

    console.log('Location State: ', state); //v2
    console.log('Query Params: ', search); 

    // console.log('Location State: ', location.state); //State sent - NO LEE PORQUE en HOMEPAGE es posible que la sintaxis sea distinta con la v.6
    // console.log('Query Params: ', location.search); //Query Params Sent
    // return (
    //     <div>
    //         <h1>State: {location.state ? 'User Online' : 'User Offline'} </h1>
    //         <h2>Search: {location.search} </h2>
    //         <h2>Query Params: {location.search} </h2>
    //     </div>
    // );

    //v2
    return (
        <div>
            <h1>State: {state ? 'User Online' : 'User Offline'} </h1>
            <h2>Query Params: {search} </h2>
        </div>
    );
}

export default StatePage;
