/*
Example 1
hasOddNumber

Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

hasOddNumber([1,2,2,2,2,2,4]) // true
hasOddNumber([2,2,2,2,2,4]) // false
*/
const example = [1,2,2,2,2,2,4]
function hasOddNumber(arr){
    const odd = (elm) => elm % 2 === 1
    return arr.some(odd)
}
// console.log(hasOddNumber(example))

/*
Example 2
hasAZero

Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

hasAZero(33321232131012) // true
hasAZero(1212121) // false
*/

const exampleNum = 33321232131012
function hasAZero(num){
    const numArr = Array.from(String(num), Number)
    const zero = (elm) => elm === 0
    return numArr.some(zero)
}
// console.log(hasAZero(exampleNum))
/*
Example 3
hasOnlyOddNumbers

Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false
*/
const example2 = [1,3,5,7]
function hasOnlyOddNumbers(arr){
    const odd = (elm) => elm % 2 === 1
    return arr.every(odd)
}
// console.log(hasOnlyOddNumbers(example2))

/*
Example 4
hasNoDuplicates

Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true
*/
const example3 = [1,2,3,1]
function hasNoDuplicates(arr){
    return !(arr.some(elm => arr.indexOf(elm) !== arr.lastIndexOf(elm)))
}
// console.log(hasNoDuplicates(example3))

// // A better way to do this without some()
// function betterHasNoDuplicates(arr){
//     const arrSet = new Set(arr)
//     return arrSet.size === arr.length
// }
// console.log(betterHasNoDuplicates(example3))

/*
    Example 5
hasCertainKey

Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainKey(arr,'first') // true
  hasCertainKey(arr,'isCatOwner') // false
*/
const example5 = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  function hasCertainKey(arr, key){
    return arr.every((val) => {
        return key in val
    })
  }
// console.log(hasCertainKey(example5, 'first'))
// console.log(hasCertainKey(example5, 'isCatOwner'))

/*
example 6
hasCertainValue

Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainValue(arr,'title','Instructor') // true
  hasCertainValue(arr,'first','Elie') // false
 */
function hasCertainValue(arr, key, myVal){
    return arr.every((thing)=>{
        return thing[key] === myVal
    })
}
console.log(hasCertainValue(example5, 'title', 'Instructor'))
console.log(hasCertainValue(example5, 'first', 'Elie'))