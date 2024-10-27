
import './App.css';
import Courselist from './Courselist';
import RowButtons from './RowButtons';
import { useState } from 'react';

function App() {
  const [courses, setCourses] = useState([]);
  const [coursename, setCoursename] = useState('');

  function AddClass(){
      let copy = [...courses];
      let name = coursename;
      copy.push(name);
      setCourses(copy);
      setCoursename('');
  }

  function ClearClass(){
      setCourses([]);
  }

  

  return (
    <div className="App">
      <Courselist courses={courses} setCourses={setCourses}></Courselist>

      <RowButtons 
        coursename={coursename} 
        setCoursename={setCoursename} 
        AddClass={AddClass} 
        ClearClass={ClearClass}></RowButtons>
    </div>
  );
}

export default App;
