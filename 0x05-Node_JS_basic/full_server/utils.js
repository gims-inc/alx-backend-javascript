const { readFile } = require('fs');

const readDatabase = (filePath) => {
  const students = {};

  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const Header = lines.slice(1);

        for (let i = 0; i < Header.length; i += 1) {
          if (Header[i]) {
            const field = Header[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }

        resolve(students);
      }
    });
  });
};

module.exports = readDatabase;
