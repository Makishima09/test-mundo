// Crear un componente de tipo función y acceder a su estado
// privado a través de un hook y además poder modificarlo

import React, { useState } from 'react';

const Hookone = () => {
    //Valor  inicial contador
    const valorInicial = 0;
    //valor inicial para una persona
    const personInicial = {
        nombre : 'Makilok',
        email : 'correo@gloco.com'
    }

    //  valorInicial y personaInicial sean parte del estado del componente
    //  para así poder gestionar su cambio y se vea reflejado en la vista del componente
    //  const [nombreVariable, funciónParaCambiar] = useState(valorInicial)

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personInicial);

    function incrementoCont(){
        // funciónParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    //Función para actualizar el estado de persona en el componente
    function actualizaPersona(){
        setPersona(
            {
                nombre: 'Gundam',
                email: 'simon@comandante.com'
            }
        )
    }

    return (
        <div>
            <h1>
                Ejemplo useState()
            </h1>
            <h2>
                CONTADOR: {contador}
            </h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email} </h3>

            <button onClick={incrementoCont}>Incrementar contador</button>
            <button onClick={actualizaPersona}>Actualizar persona</button>
        </div>
    );
}

export default Hookone;
