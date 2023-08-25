/**
 * Formulario que tenga todos los campos necesarios para trabajar con los datos
 * de un formulario y crear una nueva tarea dentro del tasklist
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    function addTask(e) {
        e.preventDefault(); //Importante para evitar recargas innecesarias de la pág por el submit que ejecuta POST 
        //hacia una ruta concreta y autorecarga la pag
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: '#34abeb',
        fontWeight: 'bold'
    }
    const urgentStyle = {
        color: '#fc2b2b',
        fontWeight: 'bold'
    }
    const blockingStyle = {
        color: '#fcd62b',
        fontWeight: 'bold'
    }

    function clearForm() {
        var formInputs = document.getElementById("form-id");
        formInputs.reset();
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4 m-3' id='form-id'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' placeholder='Title task' required autoFocus />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' placeholder='Description' required/>
                <label htmlFor='selectLevel' className='sr-only'><b>Priority:</b></label>
                <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENTE}>
                        Urgente
                    </option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>

                </select>

            <button type='submit' className='btn btn-success btn-lg ms-2'>
                {length > 0 ? 'Add New Task' : 'Create first task'}
            </button>
            <button type='button' onClick={clearForm} className='btn btn-info btn-lg ms-2' style={{color: 'white'}}>
                Clear Form
            </button>            
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length : PropTypes.number.isRequired
};

export default TaskForm;
