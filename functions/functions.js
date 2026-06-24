/**
 * Functions
 * @params
 * @return
 */

// console.log(2 + 2)
// console.log(4 + 4)
// console.log(100 + 15)


// function addAll (a ,b){
//     return arguments.length
//     return a + b
// }

// console.log(addAll(4,4))
// console.log(typeof addAll)
// // const addAll = () => {

// // }

// // const greet = function (){

// // }



function sayGoodMorning(name){
    return "Good morning " + name
}
const sayGoodMorning2= function greeting(name){
    return "Good morning " + name
}
const sayGoodMorning3=(name)=> "Good morning " + name
console.log(sayGoodMorning("Michelle"))
console.log(sayGoodMorning2("Michelle"))
console.log(sayGoodMorning3("Michelle"))

function multiply(a,b){
    return a*b
}console.log(multiply(3,5))

function getFullName(firstName, lastName){
    return firstName + " "  + lastName
}
console.log(getFullName("John","Doe"))


function getGrade(score){
    if (score>=80) return "A"
    if (score>=60) return "B"
    if (score>=50) return "C"
    return "F"

}console.log(getGrade(40))

const array=[32,54,67,89,90]


function sumArray(arr){
      let sum=0
    for(const n of arr)
       sum+=n
        return sum;
    }
console.log(`sum :${sumArray(array)}`) 
function getAverage(arr){
    return sumArray(arr)/arr.length
} console.log(`${getAverage(array)}`)


function printStudentReport(name, scores) {
    let total = 0;

    console.log(`Student: ${name}`);
    console.log("Scores and Grades:");

    for (let i = 0; i < scores.length; i++) {
        let grade;

        if (scores[i] >= 80) {
            grade = "A";
        } else if (scores[i] >= 70) {
            grade = "B";
        } else if (scores[i] >= 60) {
            grade = "C";
        } else if (scores[i] >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }

        console.log(`Score: ${scores[i]}, Grade: ${grade}`);
        total += scores[i];
    }

    let average = total / scores.length;
    let result = average >= 50 ? "PASS" : "FAIL";

    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Overall: ${result}`);
}

printStudentReport("Michelle", [85, 72, 64, 48, 90]);