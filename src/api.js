const API_BASE = "http://localhost:3000";

export const fetchStudents = async () => {
    const response = await fetch(`${API_BASE}/students`);
    if (!response.ok) throw new Error("Failed to fetch students");
    return response.json();
};

export const createStudent = async (student) => {
    const response = await fetch(`${API_BASE}/students`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ student }),
    });
    if (!response.ok) throw new Error("Failed to create student");
    return response.json();
};

export const updateStudent = async (id, studentData) => {
    const response = await fetch(`${API_BASE}/students/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ student: studentData }),
    });
    if (!response.ok) throw new Error("Failed to update student");
    return response.json();
};

export const deleteStudent = async (id) => {
    const response = await fetch(`${API_BASE}/students/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const responseText = await response.text();

    if (!response.ok) {
        throw new Error(`Failed to delete student: ${responseText}`);
    }

    return JSON.parse(responseText);
};