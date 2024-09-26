/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, crr) => acc + crr); // accumlator + current value ((0 + 1), (1 + 2), (3 + 3), ((returned)6 + 4))
console.log(sum); // 10

let sum2 = nums.reduce((acc, crr) => {
    return acc + crr;
}, 10);
console.log(sum2); // 20


const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
    let totalexperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
    console.log(totalexperience) // 16
    
  // Grouping by a property, and totaling it too
    let experinceByProfession = teamMembers.reduce((acc, curr) =>{
        let key = curr.profession;
        if (!acc[key]){
            acc[key] = curr.yrsExperience; 
        } else {
            acc[key] += curr.yrsExperience; 
        }
        return acc;
    }, {});

    console.log(experinceByProfession); // {Developer: 12, Designer: 4}