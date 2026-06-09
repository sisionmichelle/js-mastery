const numbers = [23, 87, 45, 12, 99, 56, 34, 78, 61, 5];

for ( let i = numbers.length - 1; i >= 0 ; i--){
    console.log(numbers[i])
}

let isPalindrome = true

for(i=0;i<=Math.floor(numbers.length/2); i++){
    let strtNum= numbers[i]
    let endNum= numbers[numbers.length-1-i]
    if(strtNum != endNum){
        isPalindrome=false
    }console.log(`Mismatched index at ${i}: ${strtNum} vs ${endNum}`)
    break;
}
console.log(`Is Palindrome: ${isPalindrome}`)