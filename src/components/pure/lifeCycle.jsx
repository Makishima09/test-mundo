

import React, { Component } from 'react';


class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount() { //deprecated
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount() {
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de pintarlo');
    }

    componentWillReceiveProps(nextProps) { //deprecated
        console.log('WillReceiveProps: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe actualizarse o no (boolean)
         */
        //return true / false
    }

    componentWillUpdate(nextProps, nextState) { //deprecated
        console.log('WillUpdate: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo después de actualizarse');
    }

    componentWillUnmount() { //deprecated
        console.log('WillUnmount: Justo antes de desaparecer');
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycle.propTypes = {

};


export default LifeCycle;
