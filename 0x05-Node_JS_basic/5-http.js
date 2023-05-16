const http = require('http');
const fs = require('fs');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const hostname = '127.0.0.1';
const port = 1245;

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
    const studentsByField = {};
    const all = {};

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

    all.numberOfStudents = `Number of students: ${totalStudents}`;
    all.studentsBydept = [];

    for (const field in studentsByField) {
      if (Object.hasOwnProperty.call(studentsByField, field)) {
        const count = studentsByField[field];
        const list = students
          .filter((student) => student.field === field)
          .map((student) => student.firstname);

        all.studentsBydept.push(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    }

    return all;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'GET' && url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('Hello Holberton School!');
    response.end();
  } else if (method === 'GET' && url === '/students') {
    response.statusCode = 200;
    response.write('This is the list of our students\n');
    countStudents(DB_FILE)
      .then((data) => {
        response.write(data.numberOfStudents);
        response.write(data.studentsBydept.join('\n'));
        response.end();
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end(error.message);
      });
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.write('Not found');
    response.end();
  }
});

app.listen(port, hostname, () => {
  console.log(`Server is listening on ${hostname}:${port}`);
});
