/**
 * 
 * Count how many numbers fall into each of these ranges and log the counts:
•	0–24
•	25–49
•	50–74
•	75–99

 */

const numbers = [23, 87, 45, 12, 99, 56, 34, 78, 61, 5];

let rangeA = 0, rangeB = 0, rangeC = 0, rangeD = 0
let sum= 0

for (number of numbers){
    if (number <= 24) {
        sum= sum + number;
        rangeA++
    } 
    else if (number <= 49) rangeB++;
    else if (number <= 74) rangeC++;
    else rangeD++
}

console.log(`0 - 24 :  (${sum}) (${rangeA}) `)
console.log(`25 - 49 :  (${rangeB}) `)
console.log(`50 - 74 :  (${rangeC}) `)
console.log(`75 - 99 : (${rangeD}) `)
console.log(`sum: ${sum}`)


/**
 * Find odd & even numbers 
 */

const nums = [2 , 8 , 13, 98, 34, 56, 66, 17, 19, 67, 32 ]
let evenCount=0
let oddCount=0
for (const num of nums){
    if(num %2===0){
        console.log(`Even:${num}`)
        evenCount++
        
    }else{
        console.log(`Odd: ${num}`)
        oddCount++
    }
}console.log(`Even nums: ${evenCount}`)
 console.log(`Odd nums: ${oddCount}`)



/**
 * Temps
 * 0 - 15 (cold)
 * 16 - 25 (mild)
 * 26 - 35 (warm)
 * 36 - 45 (hot)
 */

const temperatures = [12, 15,16, 21, 24, 27, 33, 36, 48, 52, 61 ]
console.log(typeof temperatures)

const addition = temperatures.
                    reduce((accumulator, currentVal) => accumulator + currentVal, 0)
console.log(addition)



let cold =0
let mild=0
let warm=0
let hot=0



for(const temp of temperatures){
    if(temp<=15) {
        cold++
        
    } else if(temp<=25){
        mild++
    }else if(temp<=35){
        warm++
    }else{
        hot++
    }

}

console.log(`Cold: ${cold}`)
 console.log(`Mild: ${mild}`)
 console.log(`Warm: ${warm}`)
 console.log(`Hot: ${hot}`)
 console.log(`Sum: ${addition}`)
