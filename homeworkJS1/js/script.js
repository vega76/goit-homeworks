var student = {
  age:18,
  name:'Vasya',
  mySecondName:'Pupkin'
}
console.log(student.age);
for (var i in student) {
  console.log('i',i);
  console.log('student[i]',student[i]);
  console.log('___________');
}
var keyList = Object.keys(student);
console.log(keyList);
