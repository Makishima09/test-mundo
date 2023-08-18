/**
 * Ejemplo de:
 *
 * - useState()
 * - useRef() identificar valores o referenciar elementos
 * - usedEffect() controlar cambios en la vista
 */

import React, {useState, useRef, useEffect} from 'react';

const Hooktwo = () => {

    // Creamos 2 contadores distintos
    //cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //referencia con useRef() para asociar una var con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * Uso de useEffect()
     */

    // CASO 1: Ejecutar SIEMPRE un snippet de código
    //Cada vez que haya un cambio en el estado de un componente se ejecuta aquello que esté dentro del useEffect()

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente');
    //     console.log('Mostrando Referencia a elemento del DOM:');
    //     console.log(miRef);
    // });

    /**CASO 2: Ejecutar SOLO cuando cambie Contador1
     * Cada vez que haya un cambio en cont1 se ejecuta lo que diga el useEffect()
     * En caso de que cambie cont2, no habrá ejecución
     */

    // useEffect(() => {
    //     console.log('Cambio en el estado del contador 1');
    //     console.log('Mostrando Referencia a elemento del DOM:');
    //     console.log(miRef);

    // }, [contador1]);

    /**CASO 3: Ejecutar SOLO cuando cambie Contador1 o Contador2
     * Cada vez que haya un cambio en cont1 Y cont2 se ejecuta lo que diga el useEffect()
     */

         useEffect(() => {
          console.log('Cambio en el estado del contador 1 o contador 2');
          console.log('Mostrando Referencia a elemento del DOM:');
          console.log(miRef);
         }, [contador1, contador2]);


    return (
        <div>
            <h1>
                Ejemplo useState(), useRef() y useEffect()
            </h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/*Elemento referenciado*/}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/*Botones para cambiar los contadores*/}
            <div>
                <button onClick={incrementar1}>Incrementar cont 1</button>
                <button onClick={incrementar2}>Incrementar cont 2</button>
            </div>

        </div>
    );
}

export default Hooktwo;
