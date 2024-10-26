import React, { useState } from 'react'

export default function RowButtons() {
    const [courses, setCourses] = useState([]);
    const [coursename, setCoursename] = useState('');

    function AddClass(){
        let copy = [...courses];
    }
    
  return (
    <div className='btn-container'>
        <form>
            <input value={coursename} type='text' placeholder='Enter course name' onChange={(e) => setCoursename(e.target.value)}></input>
            <button className='btn-add'>Add Course</button>
        </form>
        <button className='btn-calc'>Calculate</button>
        <button className='btn-clear'>Clear</button>
    </div>
  )
}
