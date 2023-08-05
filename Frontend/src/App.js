import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Task from './Pages/tasks/Task';
import Addtask from './Pages/tasks/Addtask';
import EditTask from './Pages/tasks/EditTask';



function App() {
  return (
    
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks/:id' element={<Task />} />
        <Route path='/tasks' element={<Addtask />} />
        <Route path='/tasks/e-tasks/:id' element={<EditTask />} />
      </Routes>
    </div>
    
  );
}

export default App;
