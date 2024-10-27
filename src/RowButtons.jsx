

export default function RowButtons({ coursename, setCoursename, AddClass, ClearClass }) {
   

    
    
  return (
    <div className='btn-container'>
        
        <input className='inpt-course' value={coursename} type='text' placeholder='Enter course name' onChange={(e) => setCoursename(e.target.value)}></input>
        <button className='btn-add' onClick={AddClass}>Add Course</button>
        <button className='btn-clear' onClick={ClearClass}>Clear</button>
    </div>
  )
}
