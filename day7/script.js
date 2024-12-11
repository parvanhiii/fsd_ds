const students = [
    { name: 'Alice', score: 50 },
    { name: 'Bob', score: 65 },
    { name: 'Charlie', score: 80 },
    { name: 'David', score: 45 },
    { name: 'Joe', score: 75 },
];

let newer = students
    .filter((student) => student.score > 60)
    .map((student)=>student.score*2)
    .reduce((x,y)=>x+y,0);
console.log(newer);