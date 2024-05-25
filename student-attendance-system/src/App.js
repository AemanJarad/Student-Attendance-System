import React, { useState } from 'react';
import './App.css';

function App() {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [date, setDate] = useState('');
  const [classSection, setClassSection] = useState('');
  const [subject, setSubject] = useState('');
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  // Sample data for dropdowns
  const classSections = ['Class A', 'Class B', 'Class C'];
  const subjects = ['Math', 'Science', 'English'];

  const handleMarkAttendance = (status) => {
    const newAttendanceRecord = {
      name: studentName,
      id: studentID,
      date: date,
      status: status,
    };
    // Add the new attendance record to the existing records
    setAttendanceRecords([...attendanceRecords, newAttendanceRecord]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Attendance System</h1>
      </header>
      <div className="container">
        <div className="input-section">
          <h2>Mark Attendance</h2>
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Student ID"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            value={classSection}
            onChange={(e) => setClassSection(e.target.value)}
          >
            <option value="">Select Class/Section</option>
            {classSections.map((section, index) => (
              <option key={index} value={section}>
                {section}
              </option>
            ))}
          </select>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <button onClick={() => handleMarkAttendance('Present')}>
            Mark Present
          </button>
          <button onClick={() => handleMarkAttendance('Absent')}>
            Mark Absent
          </button>
        </div>
        <div className="view-attendance-section">
          <h2>View Attendance</h2>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Date</th>
                <th>Attendance Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.name}</td>
                  <td>{record.id}</td>
                  <td>{record.date}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
