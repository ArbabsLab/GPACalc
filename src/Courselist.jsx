import { useState } from "react";

export default function Courselist({ courses, setCourses }) {
  const [check, setCheck] = useState(new Array(courses.length).fill(true));
  const [grades, setGrades] = useState(new Array(courses.length).fill(0));
  const [credits, setCredits] = useState(new Array(courses.length).fill(0));
  const [calculatedGPA, setCalculatedGPA] = useState(0);

  
  function RemoveCourse(i) {
    setCourses(courses.filter((_, index) => index !== i));
    setCheck(check.filter((_, index) => index !== i));
    setGrades(grades.filter((_, index) => index !== i));
    setCredits(credits.filter((_, index) => index !== i));
  }

  function checkArray(i) {
    const copy = [...check];
    copy[i] = !copy[i];
    setCheck(copy);
  }

  function handleGradeChange(index, value) {
    const updatedGrades = [...grades];
    updatedGrades[index] = value;
    setGrades(updatedGrades);
  }

  function handleCreditChange(index, value) {
    const updatedCredits = [...credits];
    updatedCredits[index] = parseFloat(value) || 0;
    setCredits(updatedCredits);
  }

  function gpaCalc() {
    let creditSum = 0;
    let gradeSum = 0;

    for (let i = 0; i < check.length; i++) {
      if (check[i] === true) {
        creditSum += credits[i];
        gradeSum += grades[i] * credits[i];
      }
    }

    const gpa = creditSum ? (gradeSum / creditSum).toFixed(2) : 0;
    setCalculatedGPA(gpa);
  }

  return (
    <div className="course-container">
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
          {courses.map((course, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={check[index]}
                  onChange={() => checkArray(index)}
                />
              </td>
              <td>{course}</td>
              <td>
                <select
                  className="grade"
                  value={grades[index]}
                  onChange={(e) => handleGradeChange(index, e.target.value)}
                >
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
              <td>
                <input
                  type="number"
                  value={credits[index]}
                  placeholder="Enter credits"
                  onChange={(e) => handleCreditChange(index, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => RemoveCourse(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <p>Calculated GPA: {calculatedGPA}</p>
        <button onClick={gpaCalc}>Calculate GPA</button>
      </div>
    </div>
  );
}
