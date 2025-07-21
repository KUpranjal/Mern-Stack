const students = [
  { name: "Ravi", marks: [45, 55, 60] },
  { name: "Anjali", marks: [30, 40, 35] },
  { name: "Neha", marks: [70, 80, 90] },
  { name: "Aman", marks: [50, 45, 55] }
];

const result = students
  .filter(student =>  student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length >= 50
  )
  .map(student => student.name.toUpperCase())
  .reduce((acc, name, idx, arr) => acc + name + (idx < arr.length - 1 ? ',' : ''), '');

console.log(result);