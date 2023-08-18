/**
 * Ejemplo de uso del método componente WillUnmount para el componente clase
 * y ejemplo de hooks para el componente funcional
 * Cuando el componente va a desaparecer
 */

import React, { Component, useEffect } from 'react'
// COMPONENTE DE CLASE
export class WillUnMount extends Component {
  
  componentWillUnmount() {
    console.log('Comportamiento antes de que el componente desaparezca');
  }
    render() {
    return (
      <div>WillUnMount</div>
    )
  }
}

// COMPONENTE DE FUNCION
export const WillUnMountHook = () => {
    useEffect(() => {
        //aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);
    return (
        <div>
            WillUnMount
        </div>
    );
}


