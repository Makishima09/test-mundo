import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Description', false, LEVELS.NORMAL)
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState([true]);
    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);


    //cambios de estado de un componente en un hijo que se verá afectado en el padre
    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }
    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lsita*/}
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
}

export default TaskListComponent;
