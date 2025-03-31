import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import { fetchStudents } from './api';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const fetchedStudents = await fetchStudents();
        setStudents(fetchedStudents);
      } catch (error) {
        console.error("Failed to fetch students", error);
      }
    };

    loadStudents();
  }, []);

  const handleStudentAdded = (newStudent) => {
    setStudents(prevStudents => [...prevStudents, newStudent]);
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <AddStudent onStudentAdded={handleStudentAdded} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
