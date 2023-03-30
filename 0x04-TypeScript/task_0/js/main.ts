interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
  }
  
const studentOne: Student = {
  firstName: 'Caps',
  lastName: 'Lock',
  age: 40,
  location: 'Madagascar'
}

const studentTwo: Student = {
  firstName: 'Gims',
  lastName: 'Inc',
  age: 4,
  location: 'Github'};

const studentsList: Array<Student> = [studentOne, studentTwo];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";
table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);