
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CourseListing from './pages/CourseListing';
import CourseDetail from './pages/CourseDetail';
import StudentDashboard from './pages/StudentDashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<CourseListing />}></Route>
        <Route path='/:id' element={<CourseDetail />}></Route>
        <Route path='/dashboard' element={<StudentDashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
