import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//Modelos
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';


const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log('Task created');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    },[task]);

    /**
     * Function devuelve un Badge dependiendo del level de la tarea
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
                
            case LEVELS.URGENTE:
                return(
                    <h6>
                        <span className='badge bg-warning'>
                        {task.level}
                    </span>
                    </h6>
                )
            
            case LEVELS.BLOCKING:
                return(
                    <h6>
                        <span className='badge bg-danger'>
                        {task.level}
                    </span>
                    </h6>
                )
            default:
                break;
        }
    }

    /**
     * Function que devuelve icono dependiendo de si está completada o no la tarea
     */
    function taskCompletedIcon() {
        if(task.completed) {
            return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else {
            return(<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    const taskCompleted = {
        color: 'gray',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'orangered'
    }

    return (

        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending }>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>            
            {/* Ejecución de función que devuelve elemento Badge */}
            {taskLevelBadge()}
                {/* <span>{task.level}</span> */}
            </td>
            <td className='align-middle'>
            {/* Ejecución de función que devuelve elemento Icon */}
            {taskCompletedIcon()}
            {/* Versión de ejecución de lo anterior pero con operadores ternarios:  */}
                {/* {task.completed ? 
                (<i className='bi-toggle-on' style={{color: 'green'}}></i>) 
                : (<i className='bi-toggle-off' style={{color: 'grey'}}></i>)
                } */}
                <i onClick={() => remove(task)} className='bi-trash task-action' style={{color: 'tomato'}}></i>
                {/* <span>{task.completed ? 'Completed' : 'Pending'}</span> */}
            </td>
        </tr>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
