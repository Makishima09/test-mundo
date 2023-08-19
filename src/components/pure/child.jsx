import React from 'react';
import { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`);
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        // Evitamos que se recarge la página
        e.preventDefault();
        // Update: Ejecutar el prop de update que hemos recibido desde el padre para que cuando este se ejecute, se ejecute una función en el padre
        update(nameRef.current.value);
    }

    return (
        <div style={{background: 'cyan', padding: '10px'}}>
            <p onMouseOver={() => console.log('On Mouse Over')} style={{fontWeight: 'bold'}}>Child Component</p>
            <p>Hello, {name}</p>
            <button onClick={() => console.log('Botón 1 pulsado')}>Botón 1</button>
            {/* Muestra alert con el texto del input */}
            <button onClick={pressButton}>Botón 2</button> 
            <button onClick={() => pressButtonParams('Hello')}>Botón 3</button>
            <input 
            placeholder='Send message to your father' 
            onFocus={() => console.log('Input Focused')}
            onChange={(e) => console.log('Input changed: ', e.target.value)}
            onCopy={() => console.log('Copied text from Input')}            
            ref = {messageRef}
            />
            {/* send viene del padre y le enviamos por props el mensaje del input del componente hijo */}
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            {/* Updating name */}
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input
                        ref={nameRef}
                        placeholder='New name'
                    />
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
