# Student Management Frontend

## Prerequisites

### Required Installations

1. Node.js
   - Download and install from https://nodejs.org/
   - Recommended: Latest LTS (Long Term Support) version
   - Verify installation:
     ```
     node --version
     npm --version
     ```

2. Package Manager
   - npm (comes with Node.js)
   - Or Yarn (optional alternative)
     ```
     npm install -g yarn
     ```

### Setup Instructions

1. Clone the Repository

2. Install Dependencies
   - npm install

3. Run app
  - npm start

### Project Structure

src/
├── api.js # API interaction methods
├── App.js # Main application component
├── AddStudent.js # Component for adding students
├── StudentList.js # Component for displaying students
└── index.js # Entry point

### API Configuration

- Ensure Rails backend is running at `http://localhost:3000`
- Update `src/api.js` if backend URL changes

### Features
- View list of students
- Add new students