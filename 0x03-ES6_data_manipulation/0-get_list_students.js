/*
 id (Number), firstName (String), and location (String). 
    Guillaume, id: 1, in San Francisco
    James, id: 2, in Columbia
    Serena, id: 5, in San Francisco
*/

export default function getListStudents(){

    let studentList = [];

    const studentOne =  {id: 1, firstName: 'Guillaume', location: 'San Francisco' };
    const studentTwo =  { id: 2, firstName: 'James', location: 'Columbia' };
    const studentThree = { id: 5, firstName: 'Serena', location: 'San Francisco' };

    studentList.push(studentOne);
    studentList.push(studentTwo);
    studentList.push(studentThree);


    return ([...studentList]);
}