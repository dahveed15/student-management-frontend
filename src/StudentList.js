import React from "react";

const StudentList = ({ students }) => {
    return (
        <div>
            <h1>Student List</h1>
            {students.length === 0 &&
                <p>No students found.</p>
            }
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{`${student.name}, Grade: ${student.grade}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;