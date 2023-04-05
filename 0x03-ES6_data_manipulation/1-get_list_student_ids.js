export default function getListStudentIds(studentlist) {
  if (studentlist instanceof Array) {
    return studentlist.map((studentlist) => studentlist.id);
  }

  return [];
}
