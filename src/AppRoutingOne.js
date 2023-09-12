import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'; 
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';

// const siLogged = () => {
//   console.log('Logeado')
//   alert('You are logged in. Redirecting to Home')
//   return (<Navigate to='/'/>)
// }

// const notLogged = () => {
//   console.log('No logeado')
//   alert('You are UNlogged. Redirecting to Login')
//   return(<LoginPage/>)
// }


function AppRoutingOne() {
  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My First Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My Second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User logged?', logged)
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/' >| HOME |</Link>
          <Link to='/about' >| ABOUT |</Link>
          <Link to='/faqs' >| FAQS |</Link>
          <Link to='/task/1' >| Task 1 |</Link>
          <Link to='/task/2' >| Task 2 |</Link>
          <Link to='/any404' >| Not Existing Route |</Link>
          <Link to='/login' >| Login |</Link>
        </aside>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/online-state" element={<StatePage/>} />
        <Route path="/login" element={
          logged
          ? <Navigate to='/'/> //siLogged()
          : <LoginPage/> //notLogged() 
        } />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/faqs" element={<AboutPage/>} />
        {/* <Route path="/profile" element={<ProfilePage/>}> */}
        <Route path="/profile" element={
          logged 
            ? <ProfilePage/> 
            //: <Redirect to='/' />
            : <Navigate to='/login'/>
        }/>


        <Route path="/tasks" element={<TasksPage/>} />
        {/* <Route path="/task/:id" element={<TaskDetailPage/>} 
          render= {
            ({match}) => (<TaskDetailPage task={taskList[match.params.id-1]}/>)
          }
        /> */}
        {/* PENDIENTE DE ARREGLAR */}
        {/* <Route path="/task/:id" element={<TaskDetailPage task={ ({match}) => taskList[match.params.id-1]  } />} /> */}
        <Route path="/task/:id" element={<TaskDetailPage task={ taskList[0] } />} />
       
        {/* 404 - Page not Found */}
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;
