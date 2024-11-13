import React from 'react';
import Marks from './Marks'; // Import the Marks component
import "./App.css";

const Displaymarks = () => {
  const students = [
    { name: 'Parvani', roll: 233, m1: 90, m3: 99 },
    { name: 'Par', roll: 23, m1: 9, m3: 9 },
    { name: 'Parv', roll: 33, m1: 8, m3: 23 },
    { name: 'Pa', roll: 3, m1: 10, m3: 85 },
    { name: 'vani', roll: 2, m1: 11, m3: 98 },
  ];

  return (
    <div>
      {students.map((student, index) => (
        <Marks
          key={index}
          name={student.name}
          roll={student.roll}
          m1={student.m1}
          m3={student.m3} // Only passing m1 and m3 (no m2)
        />
      ))}
    </div>
  );
};

export default Displaymarks;
