import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'; 
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/' >| HOME |</Link>
          <Link to='/about' >| ABOUT |</Link>
          <Link to='/faqs' >| FAQS |</Link>
          <Link to='/any404' >| Not Existing Route |</Link>
        </aside>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/faqs" element={<AboutPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/tasks" element={<TasksPage/>} />
        <Route path="/tasks/:id" element={<TaskDetailPage/>} />
        {/* 404 - Page not Found */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;
