import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            age : 33
        }
    }
    
    render() {
        return (
            <div>
                <h1>
                    Hello there {this.props.name } !
                </h1>
                <h2>
                    Número mágico: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.bday}>
                        Número Up!
                    </button>
                </div>
            </div>
        );
    }

    bday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
