import './App.css';
import Courselist from './Courselist';
import RowButtons from './RowButtons';
import { useState } from 'react';

function App() {
  const [courses, setCourses] = useState([]);
  const [coursename, setCoursename] = useState('');

  function AddClass() {
    if (coursename.trim()) {
      setCourses([...courses, coursename]);
      setCoursename('');
    }
  }

  function ClearClass() {
    setCourses([]);
  }

  return (
    <div className="App">
      <RowButtons 
        coursename={coursename} 
        setCoursename={setCoursename} 
        AddClass={AddClass} 
        ClearClass={ClearClass}
      />
      <Courselist courses={courses} setCourses={setCourses} />
      
    </div>
  );
}

export default App;