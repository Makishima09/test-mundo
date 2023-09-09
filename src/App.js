import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreentingF from './components/pure/greentingF'
import TaskListComponent from './components/container/task_list';
import Hookone from './hooks/hookone';
import Hooktwo from './hooks/hooktwo';
import MiComponenteConContexto from './hooks/hook3'
import Hook4 from './hooks/hook4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio de Greeting.jsx */}
        {/* <Greeting name="Wazoswki"></Greeting> */}
        {/* Componente funcional */}
        {/* <GreentingF name="Mikeloko"></GreentingF> */}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link random
        </a> */}
        {/* Componente de Listado de Tareas */}
         {/* <TaskListComponent></TaskListComponent> */}

        {/* Ejemplo de Hooks */}
        {/* <Hookone></Hookone> */}
        {/* <Hooktwo></Hooktwo> */}

        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        {/* <Hook4 nombre="Maikol">
        Todo lo que esté aquí dentro, es tratado como props.children
          <h3>
            Contenido del props.children
          </h3>
          <h4>Contenido adicional</h4>
        </Hook4> */}

        {/* <GreetingStyled name='MaikolKnight'></GreetingStyled> */}

      {/* </header> */}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}
      {/* Ejemplos de Renderizado Condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejemplos de uso de Formik y Yu */}
        {/* <LoginFormik></LoginFormik> */}
        <RegisterFormik></RegisterFormik>

      {/* Proyecto Final */}
      {/* <TaskListComponent></TaskListComponent> */}

    </div>
  );
}

export default App;
