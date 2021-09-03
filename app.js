// //1)
// //make the function
 var maxOfTwoNumbers = (num1,num2)=>{
     if(num1 > num2){
         console.log(num1)
     }
     if(num1 < num2){
         console.log(num2)
     }

// //within the function, create a if statement that determines with of the params are higher

 }
 maxOfTwoNumbers(15,8)

//2)
// //make function w/ 3 params
 var maxOfThree = (big1,big2,big3)=>{
     if (big1 > big2 && big1 > big3){
         console.log(big1)
     }
     if (big2 > big1 && big2 > big3){
         console.log(big2)
     }
     if (big3 > big2 && big3 > big1){
         console.log(big3)
     }

 //if statement that logs the highest number of the three
 }
 maxOfThree(10, 6, 9)


//3)
//create function
 var isCharacterAVowel = (vowel)=>{
     if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
         console.log(true)
     }
     else{
         console.log(false)
     }
 }
 isCharacterAVowel("b")


//4)
//make both functions
var sumArray=(a)=>{
var sum =0
//this loops through the length through the array
for(counter= 0; counter < a.length ; counter++)    
    sum += a[counter]
    console.log(sum)
}

var multiplyArray=(a)=>{
var multi = 1
for(counter= 0; counter < a.length ; counter++)
multi *= a[counter]
 console.log(multi)
 }

sumArray([1,2,3,4])
 multiplyArray([1,2,3,4])
//equation for the sum of the array

//equation to multiply the array

//6
var reverseString=(str)=>{
var String =""
for(i= str.length -1; i >= 0; i--){
    String += str[i]
}
console.log(String)
    
}
reverseString('BigBro')

//7)
 var findLongestWord=(string)=>{
//     //make array 
     var theArray = string.split(" ")
     var biggestWord = 0
     for(i = 0; i < theArray.length ;i++){
//     //have the function or loop through the array

//     //then have it find the length of each string in the array
     if(theArray[i].length > biggestWord){
//         biggestWord = theArray[i].length
     }
     }
     console.log(biggestWord)
//     //if string length is greater than the other string length, console log it
 }
 findLongestWord("Walking down the street with my dog")


//8)Write a function filterLongWords that takes 
//an array of words and a number i and returns the array of words
// that are longer than i characters long.
var filterLongWords=(i)=>{
var wordArray = i.split('')
var largeWord = i
for(j = 0; j < wordArray.length ;j++){
    if(wordArray[j].length > i){
        largeWord = wordArray[j]
    }
}
console.log(largeWord)
}

filterLongWords("Walking down the street with my dog")