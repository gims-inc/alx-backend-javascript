const fs = require('fs');

function readFileAsync(path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

async function countStudents(path) {
  try {
    const data = await readFileAsync(path, 'utf8');

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

        totalStudents++;

        if (studentsByField.hasOwnProperty(field)) {
          studentsByField[field]++;
        } else {
          studentsByField[field] = 1;
        }
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentsByField) {
      if (studentsByField.hasOwnProperty(field)) {
        const count = studentsByField[field];
        const list = students
          .filter((student) => student['field'] === field)
          .map((student) => student['firstname']);

        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
