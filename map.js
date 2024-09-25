/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums){
  results.push(num * 2);
}
console.log(results) // [2, 4, 6, 8, 10]

// Using map()
const multByTwo = function(num) {
  return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults); // [2, 4, 6, 8, 10]

// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified); // [2, 4, 6, 8, 10]

// Simplfied w/ map() + arrow function
const simplifiedArrow = nums.map(num => num * 2);
console.log(simplifiedArrow); // [2, 4, 6, 8, 10]

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

const studentsWithIds = students.map(student => {
  let studentObj = {};
  studentObj.id = student.id; 
  studentObj.name = student.name;
  studentObj.profession = student.profession;
  studentObj.skill = student.skill;
  studentObj.age = student.name.length * 5;
  return studentObj;
});

console.log(studentsWithIds);

/**
 * [
  * {
  *  id: 1,
  *   name: 'Mark',
  *   profession: 'Developer',
  *   skill: 'JavaScript',
  *   age: 20
  * },
  * {
  *   id: 2,
  *   name: 'Ariel',
  *   profession: 'Developer',
  *   skill: 'HTML',
  *   age: 25
  * },
  * {
  *   id: 3,
  *   name: 'Jason',
  *   profession: 'Designer',
  *   skill: 'CSS',
  *   age: 25
  * }
 * ]
 */