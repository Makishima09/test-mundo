import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENTE)
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING)

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState([true]);
    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    function completeTask(task) {
        console.log('Completa esta tarea:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //Actualizamos el estado del componente con la nueva lista de tareas y actualizará la iteración de las tareas y mostrará la tarea actualizada
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        console.log('Elimina esta tarea:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log('Agrega una tarea:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    //cambios de estado de un componente en un hijo que se verá afectado en el padre
    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')        
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/*Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                {/*Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* TODO: Iterar sobre una lista de tareas */}
                                { tasks.map((task, index) => {
                                    return(
                                        <TaskComponent 
                                            key={index} 
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}>

                                        </TaskComponent>
                                        )
                                    }
                                )}                                
                            </tbody>
                        </table>
                    </div>                    
                </div>    
                <TaskForm add={addTask}></TaskForm>            
            </div>
            
            {/* <TaskComponent task={defaultTask} ></TaskComponent> */}
        </div>
    );
}

export default TaskListComponent;
