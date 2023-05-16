const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const rows = data.trim().split('\n');
    const headers = rows.shift().split(',');

    const students = rows.map((row) => {
      const values = row.split(',');
      const student = {};

      headers.forEach((header, index) => {
        student[header] = values[index].trim();
      });

      return student;
    });

    let totalStudents = 0;
    const studentsByField = {};

    students.forEach((student) => {
      if (Object.keys(student).length > 0) {
        const { field } = student;

        totalStudents += 1;

        if (Object.hasOwnProperty.call(studentsByField, field)) {
          studentsByField[field] += 1;
        } else {
          studentsByField[field] = 1;
        }
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentsByField) {
      if (Object.hasOwnProperty.call(studentsByField, field)) {
        const count = studentsByField[field];
        const list = students
          .filter((student) => student.field === field)
          .map((student) => student.firstname);

        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
