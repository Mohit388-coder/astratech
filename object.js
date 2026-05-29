const student = {
    name: "mohit",
    class: 12,
    rollno: 23,
    marks: {eng: 90, math: 95, sci: 85},
    points: [10, 20, 30, 40, 50,{a:80}],
    age: 80,
    
}

console.log(student.points[2]);
console.log(student.marks.eng);
console.log(student.name);
console.log(student.age);
console.log(student);
console.log(student.points[5].a);