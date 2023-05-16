const fs = require('fs');

const countStudents = (path) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    }

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
    let studentsByField = {};

    students.forEach((student) => {
      if (Object.keys(student).length > 0) {
        const field = student['field'];

        // Count the total number of students
        totalStudents++;

        // Count the number of students in each field
        if (studentsByField.hasOwnProperty(field)) {
          studentsByField[field]++;
        } else {
          studentsByField[field] = 1;
        }
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field
    for (const field in studentsByField) {
      if (studentsByField.hasOwnProperty(field)) {
        const count = studentsByField[field];
        const list = students
          .filter((student) => student['field'] === field)
          .map((student) => student['firstname']);

        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
