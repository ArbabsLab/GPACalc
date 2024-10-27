
import { useEffect, useState } from "react";
export default function Courselist({courses, setCourses}) {
  const[check, setCheck] = useState(new Array(courses.length).fill(true))
  const [grades, setGrades] = useState(new Array(courses.length).fill(0));
  const [credits, setCredits] = useState(new Array(courses.length).fill(0));
  const [calculatedGPA, setCalculatedGPA] = useState(0);
  
  
  
  function RemoveCourse(i){
    setCourses(courses.filter((course, index)=>index !== i));
    setCheck(check.filter((course, index) => i !== index));
    setGrades(grades.filter((course, index) => i !== index));
    setCredits(credits.filter((course, index) => i !== index));
  }

  function checkArray(i){
    const copy = [...check];
    const updatedCheck = copy.map((item, index) => index === i? !item:item);
    setCheck(updatedCheck);
  }

  function handleGradeChange(index, value) {
    const updatedGrades = [...grades];
    updatedGrades[index] = parseFloat(value) || 0;
    setGrades(updatedGrades);
  }

  function handleCreditChange(index, value) {
    const updatedCredits = [...credits];
    updatedCredits[index] = parseFloat(value) || 0;
    setCredits(updatedCredits);
  }

  function gpaCalc(){
    let creditSum = 0;
    let gradeSum = 0;

    for (let i = 0; i < check.length; i++){
      if (check[i] === true){
        creditSum += credits[i];
        gradeSum += grades[i] * credits[i];
      }
    }
    
    setCalculatedGPA((gradeSum/creditSum).toFixed(2))
  }

  useEffect(() => {gpaCalc();}, [check, grades, credits])
  return (
    <div className='course-container'>
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Credits</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              courses.map((course, index) =>(
                <tr key={index}>
                  <td><input id={index} type="checkbox" checked={check[index]} onChange={()=> checkArray(index)}/></td>
                  <td>{course}</td>
                  <td><select className="grade" onChange={ (e)=> handleGradeChange(index, e.target.value)}>
                    <option value="">--</option>
                    <option value="4.0">A</option>
                    <option value="3.7">A−</option>
                    <option value="3.3">B+</option>
                    <option value="3.0">B</option>
                    <option value="2.7">B−</option>
                    <option value="2.3">C+</option>
                    <option value="2.0">C</option>
                    <option value="1.7">C−</option>
                    <option value="1.3">D+</option>
                    <option value="1.0">D</option>
                    <option value="0.7">D−</option>
                    <option value="0.0">F</option>
                    </select>
                  </td>
                  <td><input value={credits[index] || ""} type="number" placeholder="Enter credits" onChange={ (e)=> handleCreditChange(index, e.target.value)}/></td>
                  <td><button onClick={()=> RemoveCourse(index)}>Remove</button></td>
                </tr>
                
              ))
            }
          </tbody>
        </table>

        <div>
          <p>Calculated GPA: {calculatedGPA}</p>
      </div>
    </div>
  )
}
