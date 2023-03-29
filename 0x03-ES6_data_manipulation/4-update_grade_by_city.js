export default function updateStudentGradeByCity(studentlist, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (studentlist instanceof Array) {
    return studentlist
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
