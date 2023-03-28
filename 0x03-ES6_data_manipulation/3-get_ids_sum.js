export default function getStudentIdsSum(studentlist) {
  if (studentlist instanceof Array) {
    return studentlist.reduce((acc, value) => acc + value.id, 0);
  }

  return 0;
}
