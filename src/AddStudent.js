import React, { useState } from "react";
import { createStudent } from "./api";

const AddStudent = ({ onStudentAdded }) => {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newStudent = await createStudent({
                name: name,
                grade: parseInt(grade, 10)
            });

            setName("");
            setGrade("");
            onStudentAdded(newStudent);
        } catch (error) {
            console.error("Error creating student:", error);
            alert("Failed to add student. Please try again.");
        }
    };

    return (
        <div>
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter student name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="grade">Grade:</label>
                    <input
                        id="grade"
                        type="number"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        placeholder="Enter student grade"
                        min="1"
                        max="12"
                        required
                    />
                </div>
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;