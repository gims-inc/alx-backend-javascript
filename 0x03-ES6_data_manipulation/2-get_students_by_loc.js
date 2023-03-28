export default function getStudentsByLocation(studentlist, city) {
  if (studentlist instanceof Array) {
    return studentlist.filter((student) => student.loctaion === city);
  }

  return [];
}
