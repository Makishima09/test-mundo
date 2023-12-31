/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

// COMPONENTE DE CLASE
export class DidUpdate extends Component {
  
    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');
    }
    render() {
    return (
      <div>DidUpdate</div>
    )
  }
}

// COMPONENTE DE FUNCION
export const DidUpdateHook = () => {
    useEffect(() => {
      console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');
       
    }, []);
    return (
        <div>
            DidUpdate
        </div>
    );
}

