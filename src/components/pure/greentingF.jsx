import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreentingF = (props) => {

    //Introducción a useState
    //const [var, método para actualizarla] = useState(valor inicial)
    const [age, setage] = useState(29);

    const bday = () => {
        setage(age + 1)
    }


    return (
        <div>
            <h1>
                    Hello there {props.name } desde compo funcional!
            </h1>
            <h2>
                Nambarr: {age}
            </h2>
            <div>
                <button onClick={bday}>
                    Número Up!
                </button>
            </div>
        </div>
    );
};


GreentingF.propTypes = {
    name: PropTypes.string
};


export default GreentingF;
