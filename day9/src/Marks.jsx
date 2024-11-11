import React from "react";

const Marks = ({ m1, m2, m3 }) => {
  return (
    <div>
      <h1>Sem Wise Marks</h1>
      <h2>Sem 1: {m1}</h2>
      <h2>Sem 2: {m2}</h2>
      <h2>Sem 3: {m3}</h2>
    </div>
  );
};

export default Marks;
