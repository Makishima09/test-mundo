import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Michel');

    /**Función receptora del mensaje del hijo */
    function showMessage(text) {
        alert(`Message received: ${text}`);               
    }

    function updateName(newName) {
        setName(newName)
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <p style={{fontWeight: 'bold'}}>Father component</p>
            <Child name={name} send={showMessage} update={updateName}></Child>            
        </div>
    );
}

export default Father;
