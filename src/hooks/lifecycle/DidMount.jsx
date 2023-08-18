/**
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from 'react'

// COMPONENTE DE CLASE
export class DidMount extends Component {
  
    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }
    render() {
    return (
      <div>DidMount</div>
    )
  }
}

//COMPONENTE DE FUNCION (hook)
export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
        
    }, []); //lista vacía para que solo ejecute una vez, si no es nada: sería siempre
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}


