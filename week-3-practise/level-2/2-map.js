/*
Only students who have attended enough classes are eligible to sit an exam.
You have an array named "attendanceCounts"  which contains all the students' names and their attendance counts.
Produce a new array named "eligibleStudentNames" containing only the NAMES 
of the students who have attended AT LEAST 8 classes.
*/
var attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
];
function pres (presence){
  if(presence[1] >=8){
                      return presence[0];
  }
                     
                     }

var eligibleStudentNames = attendances.map(pres).filter(a=>a !== undefined);
console.log(eligibleStudentNames);

/* expected output
[ 'Ahmed', 'Clement', 'Tayoa', 'Nina' ]
Note: student attendance counts should NOT be included in your console output.
*/
